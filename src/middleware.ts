import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { IPlato } from "./components/PlatoList/PlatoList";

export async function middleware(request: NextRequest) {
    const urlItems = request.nextUrl.pathname.split('/').filter((item) => item !== '');
    
    if (urlItems[0] === 'platos' && urlItems.length === 2 ) {
        const platoId = urlItems[1];

        const platos: IPlato[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/platos`)
        .then((res) => res.json())
        .then((data: IPlato[]) => data.slice(0, 7))
        .catch((error) => console.log(error)) as IPlato[];

        if(!platos.some((plato) => plato.id === Number(platoId))) {
            return NextResponse.redirect(new URL('/platos', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [ '/platos/:id*' ]
};