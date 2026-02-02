import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protegemos la ruta /gestionar
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
      const decoded = atob(auth).split(':'); 
      const user = decoded[0];
      const password = decoded[1];

      // Compara con la variable que pusiste en el panel de Vercel
      const ADMIN_PASS = process.env.ADMIN_PASSWORD;

      if (user === 'admin' && password === ADMIN_PASS) {
        return NextResponse.next();
      }
    } catch (e) {
      return new NextResponse('Error de configuración', { status: 500 });
    }

    return new NextResponse('Acceso denegado', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Acceso Protegido"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/gestionar/:path*',
};