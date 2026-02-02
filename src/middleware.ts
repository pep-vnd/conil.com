import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/gestionar')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return new NextResponse('Entra con admin y tu contraseña', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Acceso"' },
      });
    }

    const auth = authHeader.split(' ')[1];
    const decoded = atob(auth).split(':');
    const user = decoded[0];
    const password = decoded[1];

    // USAMOS LA VARIABLE DE VERCEL
    if (user === 'admin' && password === process.env.ADMIN_PASSWORD) {
      return NextResponse.next();
    }

    return new NextResponse('Datos incorrectos', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Acceso"' },
    });
  }
  return NextResponse.next();
}