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
      // Usamos Buffer para decodificar, es más fiable que atob en servidores
      const decoded = Buffer.from(auth, 'base64').toString().split(':');
      const user = decoded[0];
      const password = decoded[1];

      const ADMIN_PASS = process.env.ADMIN_PASSWORD;

      if (user === 'admin' && password === ADMIN_PASS) {
        return NextResponse.next();
      }
    } catch (e) {
      console.error('Error en seguridad:', e);
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