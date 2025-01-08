import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative min-h-[75vh] w-full border-b border-ui-border-base bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 small:p-32 gap-8">
        <div className="max-w-2xl">
          <Heading
            level="h1"
            className="text-4xl md:text-5xl leading-tight text-ui-fg-base font-bold mb-4"
          >
            FPV.mx
          </Heading>
          <Heading
            level="h2"
            className="text-xl md:text-2xl leading-relaxed text-ui-fg-subtle font-normal mb-6"
          >
            Tu destino definitivo para equipos y accesorios de drones FPV en México
          </Heading>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/store">
              <Button
                variant="primary"
                size="large"
                className="min-w-[150px]"
              >
                Explorar Productos
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="large"
                className="min-w-[150px]"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
