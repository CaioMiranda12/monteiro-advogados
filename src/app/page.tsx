import { Hero } from '@/components/sections/home/Hero'
import { AreasDestaque } from '@/components/sections/home/AreasDestaque'
import { SobreResumo } from '@/components/sections/home/SobreResumo'
import { Numeros } from '@/components/sections/home/Numeros'
import { EquipeResumo } from '@/components/sections/home/EquipeResumo'
import { Depoimentos } from '@/components/sections/home/Depoimentos'
import { ContatoRapido } from '@/components/sections/home/ContatoRapido'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AreasDestaque />
      <SobreResumo />
      <Numeros />
      <EquipeResumo />
      <Depoimentos />
      <ContatoRapido />
    </>
  )
}