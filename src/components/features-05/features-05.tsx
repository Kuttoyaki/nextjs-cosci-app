/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Features01PageProps = {
  courses: any[]
}

const Features05Page = ({courses}: Features01PageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
          Course Features 
        </h2>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {course.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {course.detail}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <Image src={course.picture} alt={course.detail} width={500} height={300} className="w-full h-auto object-cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
