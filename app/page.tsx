import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getData } from "@/lib/dato";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

export default async function Home() {
  const datos = await getData(
    "https://673778bcaafa2ef22233f00b.mockapi.io/Sensores"
  );
  const datos2 = await getData(
    "https://673778bcaafa2ef22233f00b.mockapi.io/Areas/1"
  );
  const imagen = await getData(
    "https://673778bcaafa2ef22233f00b.mockapi.io/usuarios"
  );

  console.log(datos, datos2, imagen);
  
  return (
    <>
      <Textarea />
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            {datos.map((sensores: any) => (
              <div key={sensores.id}>
                <p>{sensores.tipo}</p>
                <p>{sensores.ubicacion}</p>
              </div>
            ))}
           <div>
            <p>{datos2.uMedida}</p>
            <p>{datos[0].tipo}</p>
           </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <input type="text" />
          <Link href="/Sensores">
            <button>Siguiente</button>
          </Link>
        </CardContent>
        <CardFooter>
          {imagen.map((avatares: any) => (
            <img key={avatares.id} src={avatares.avatar} alt="" />
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
