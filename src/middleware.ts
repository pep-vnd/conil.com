import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/gestionar')) {
    // Permitir peticiones POST (Server Actions) sin pasar por la validación Basic Auth del Edge para evitar conflictos
    if (request.method === 'POST') {
      return NextResponse.next();
    }

    console.log(`[Middleware] Processing ${request.method} request to ${request.nextUrl.pathname}`);
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return new NextResponse('Autenticación requerida', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Acceso Protegido"' },
      });
    }

    try {
      const auth = authHeader.split(' ')[1];
      // Usamos atob para decodificar, compatible con Edge Runtime
      const decoded = atob(auth).split(':');
      const user = decoded[0];
      const password = decoded[1]?.trim(); // Quitamos espacios extra por si acaso

      const ADMIN_PASS = process.env.ADMIN_PASSWORD;

      console.log('Middleware Auth Attempt:', {
        userReceived: user,
        passLength: password?.length,
        adminPassDefined: !!ADMIN_PASS,
        adminPassLength: ADMIN_PASS?.length
      });

      if (user === 'admin' && password === ADMIN_PASS) {
        return NextResponse.next();
      } else {
        console.log('Auth Failed: Credentials do not match.');
      }
    } catch (e) {
      console.error('Error en seguridad (Middleware):', e);
    }

    return new NextResponse('Credenciales inválidas', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Acceso Protegido"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};