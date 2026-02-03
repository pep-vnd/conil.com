import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/gestionar')) {
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
  matcher: '/gestionar/:path*',
};