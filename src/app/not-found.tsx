import Image from "next/image";
import server_down from "~/public/images/server_down.svg";
import { cn } from "~/utils/cn";

const NotFound = () => (
  <main>
    <section className={cn("flex min-h-[100dvh] items-center justify-center")}>
      <div className="relative size-[500px]">
        <Image src={server_down} fill alt="server down graphic" priority />
      </div>
    </section>
  </main>
);

export default NotFound;
