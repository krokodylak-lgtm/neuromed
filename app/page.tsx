"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function NeuromedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const specialties = [
    "Neurologia",
    "Leczenie bólu",
    "Kardiologia",
    "Endokrynologia",
    "Neurochirurgia",
    "Choroby wewnętrzne",
    "Psychiatria",
    "Okulistyka",
    "Urologia",
  ]

  const locations = [
    {
      city: "Lublin",
      address: "ul. Północna 8, 20-818 Lublin",
      phone: "81 74 30 965",
    },
    {
      city: "Kraśnik",
      address: "ul. Zygmunta Krasińskiego 8, 23-210",
      phone: "81 479 05 58, 733 444 402",
    },
  ]

  return (
    <div className="min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <img src="/neuromed-logo.svg" alt="Neuromed Logo" className="h-10 md:h-12 w-auto" />
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              <Phone className="mr-2 h-4 w-4" />
              Kontakt
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/centrala_neuromed_optimize-X09uxu6vGrlBMHY7hBHyw7Wv3TpDZX.jpg"
            alt="Neuromed Clinic Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">NEUROMED</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
              {"Centrum medyczne skupiające wokół Neurologii i Medycyny Bólu inne powiązane dziedziny medycyny"}
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8"
              onClick={() => setIsModalOpen(true)}
            >
              <Phone className="mr-2 h-5 w-5" />
              Umów wizytę
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Profesjonalna opieka medyczna"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {
                  "Nasi lekarze stosują najnowsze technologie medyczne i strategie terapeutyczne, stale podnoszą swoje kwalifikacje uczestnicząc w licznych szkoleniach krajowych i zagranicznych."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Współpracujemy z licznymi ośrodkami klinicznymi i badawczymi w zakresie diagnostyki i leczenia, aby móc jak najlepiej diagnozować i leczyć swoich pacjentów."
                }
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250824_172229a-vKFrxaqeZo0BwI1HUMTN44QUX9Hzg7.jpg"
                alt="Neuromed Clinic Entrance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{"Poradnie specjalistyczne"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"Personel medyczny stanowią wybitni lekarze klinicyści – specjaliści z zakresu:"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-lg font-medium">{specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{"Badania specjalistyczne"}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{"Densytometria"}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {
                    "Badania gęstości kości w profilaktyce osteoporozy (szyjka kości udowej, kręgosłupa) na profesjonalnym aparacie GE LUNAR DPX"
                  }
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+48733444402" className="hover:underline">
                    733 444 402
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{"Dermoskopia"}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {"Badania dermoskopowe oceniane przez wykwalifikowanych specjalistów"}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+48817430965" className="hover:underline">
                    81 743 09 65
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{"Nasze lokalizacje"}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">{location.city}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a
                        href={`tel:+48${location.phone.replace(/\s/g, "")}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg border">
              <iframe
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.036965803343!2d22.559858751153584!3d51.25522873683065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722575ca9fe9671%3A0x51a3ee93c91bb50b!2sNeuromed!5e0!3m2!1spl!2spl!4v1518967807236"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                title="Neuromed Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Zadzwoń i umów się na wizytę!"}</h2>
          <p className="text-xl mb-8 text-pretty opacity-90">
            {"Skontaktuj się z nami, aby umówić wizytę u naszych specjalistów"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => setIsModalOpen(true)}>
              <Phone className="mr-2 h-5 w-5" />
              Umów wizytę
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{"Kontakt"}</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">{"Email"}</p>
                      <a
                        href="mailto:neuromed.pl@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        neuromed.pl@gmail.com
                      </a>
                      <a
                        href="mailto:neuromed.krasnik@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors block"
                      >
                        neuromed.krasnik@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">{"Godziny otwarcia"}</p>
                      <p className="text-muted-foreground">
                        {"Skontaktuj się z nami telefonicznie, aby poznać aktualne godziny przyjęć"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src="/neuromed-logo.svg" alt="Neuromed" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm opacity-80 mb-4">{"NZOZ NEUROMED M. i M. Nastaj Spółka Partnerska"}</p>
            <p className="text-sm opacity-60">{"© 2025 Neuromed. Wszystkie prawa zastrzeżone."}</p>
          </div>
        </div>
      </footer>

      {/* EU funding banner */}
      <div className="bg-white py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotype_UE-KWN7utqXE34RhooZj6Gtb882o9LeMO.jpg"
            alt="Projekt współfinansowany ze środków UE w ramach EFS"
            className="w-full max-w-5xl mx-auto h-auto"
          />
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Zadzwoń i umów się na wizytę!</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Skontaktuj się z nami telefonicznie, aby umówić wizytę w wybranej lokalizacji.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            {/* Lublin Location */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Lublin</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">ul. Północna 8, 20-818 Lublin</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+48817430965" className="text-lg font-semibold text-primary hover:underline">
                    81 74 30 965
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t" />

            {/* Kraśnik Location */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Kraśnik</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">ul. Zygmunta Krasińskiego 8, 23-210</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+48814790558" className="text-lg font-semibold text-primary hover:underline">
                      81 479 05 58
                    </a>
                    <a href="tel:+48733444402" className="text-lg font-semibold text-primary hover:underline">
                      733 444 402
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
