'use client'

import Link from 'next/link';

import * as foundations from "@teliads/components/foundations";
import { TeliaLogo, TeliaList, TeliaFooter, TeliaFooterLegal, TeliaFooterNavigation, TeliaLink, TeliaNotification, TeliaAccordion, TeliaAccordionItem, TeliaHeroBanner } from '@teliads/components/react';

let links = [
  {
    "header": "Snarveier",
    "links": [
      {
        "href": "https://www.telia.no/bedrift/sikkerhet/trygge-ansatte/trygg-surfing/",
        "name": "Telia Trygg Surfing"
      }
    ]
  },
  {
    "header": "Kontakt",
    "links": [
      {
        "href": "https://www.telia.no/bedrift/kundeservice/mobil/",
        "name": "Kundeservice Bedrift Mobil"
      }
    ]
  },
  {
    "header": "Om Telia",
    "links": [
      {
        "href": "https://www.telia.no/om-telia/",
        "name": "Om Telia Norge"
      },
      {
        "href": "https://www.telia.no/bedrift/5g-bedrift/",
        "name": "5G"
      },
      {
        "href": "https://www.telia.no/om-telia/baerekraft/",
        "name": "Bærekraft"
      }
    ]
  }
];

export default function Home() {
  return (
    <main>
      <div className="menu telia-row--sm">
        <div className="menu__top">
          <ul className="menu__top--heading">
          </ul>
        </div>
        <div className="menu__content">
          <a href="https://www.telia.no/" className="menu__logo-container">
            <TeliaLogo imgAlt='Telia Logo'/>
          </a>
          <ul id="Privat-panel" className="menu__content-panel">
            <li><a href="https://www.telia.no/bedrift/kundeservice/mobil/" className="menu__item link"><span className="link__content">Kundeservice</span></a></li>
          </ul>
          <div className="menu__content-right">
          </div>
        </div>
      </div>

      <div className="telia-grid">
        <div className="telia-row telia-row--md">
          <div className="telia-col telia-col-12">


            <TeliaHeroBanner imgAlt='Telia DNS Security Basic Filter' 
                             imgSrc='images/Telia_Company_Reinvention_90_lg.png'
                             mediumSet='images/Telia_Company_Reinvention_90_md.png'
                             smallSet='images/Telia_Company_Reinvention_90_sm.png'
                             backgroundColor='rgb(10, 27, 35)'
                             backgroundCrop='cover'
                             backgroundImageFrom='lg'>

              <div className="telia-text-spacing" style={{color: foundations.colors.white}}>
                <div className="telia-heading--title-500 title-500  hydrated">
                  Telia DNS Security Basic Filter                 
                </div>
                <div className="telia-p telia-p--paragraph-100 hydrated">
                  Beskytt deg og familien mot angrep
                </div>
              </div>      

            </TeliaHeroBanner>

          </div>
        </div>
        <div className="telia-row">
          <div className="telia-col telia-col-12">

            <div className="telia-text-spacing">
              <TeliaNotification status='error' htmlRole='alert' headingTag='h2'>  
                <span slot="heading">Advarsel! Denne nettsiden er ikke sikker.</span>
                <span slot="content">
                  <div className="telia-text-spacing">
                    <div className="telia-p telia-p--paragraph-100">
                      For din sikkerhet har Telia DNS Security Basic Filter blokkert tilgangen til denne nettsiden. For å forhindre potensiell skade fra trusler på internett anbefaler vi deg å ikke åpne den.
                    </div>
 
                  </div>
                </span>
              </TeliaNotification>
            </div>

          </div>
        </div>
        <div className="telia-row">
          <div className="telia-col telia-col-12">

            <TeliaAccordion heading='Ofte stilte spørsmål' headingTag='h2'>
              <TeliaAccordionItem heading='Jeg har fått en SMS om Telia Trygg Surfing. Hva betyr det?' indented>
                <div className="telia-text-spacing">
                  <div className="telia-p telia-p--paragraph-100">
                    <i>Hei,
                    Din arbeidsgiver har kjøpt tjenesten Telia Trygg Surfing, som beskytter deg mot utrygge nettsider og svindelforsøk når du bruker Telia sitt nett. 
                    Og det helt uten at du trenger å foreta deg noe.</i>
                  </div>
                  <div className="telia-p telia-p--paragraph-100">
                    Du har mottatt denne SMSen fordi din arbeidsgiver har inngått en avtale om bruk av Telia Trygg Surfing. I praksis vil dette bety at alle nettadresser du benytter vil bli sjekket for usikkerhet av et DNS filter.
                  </div>
                </div>
              </TeliaAccordionItem>
              <TeliaAccordionItem heading='Hva er DNS filtrering?' indented>
                <div className="telia-text-spacing">
                  <div className="telia-p telia-p--paragraph-100">
                    DNS-filtrering refererer til en prosess der DNS brukes til å blokkere eller begrense skadelige nettsteder og kode for å filtrere ut upassende eller skadelig innhold. 
                    Det hjelper med å sikre dataene, nettverket og ressursene dine mot nettangripere.                  
                  </div>
                  <div className="telia-p telia-p--paragraph-100">
                    Hvis DNS-serveren oppdager at nettadressen du ønsker å gå til er merket som potensielt skadelig, vil du automatisk bli sendt til denne siden. Siden informerer deg om hvilken fare som er forbundet med nettsiden.               
                  </div>
                </div>            
              </TeliaAccordionItem>
              <TeliaAccordionItem heading='Kan jeg bruke egen DNS?' indented>
                <div className="telia-text-spacing">
                  <div className="telia-p telia-p--paragraph-100">
                    Da er du ikke sikret av tjenesten Telia Trygg Surfing                 
                  </div>
                </div>            
              </TeliaAccordionItem>
              <TeliaAccordionItem heading='Hva gjør jeg hvis jeg mener dette er feil?' indented>
                <div className="telia-text-spacing">
                  <div className="telia-p telia-p--paragraph-100">
                    Hvis du mener det er feil at nettsiden du ønsker å besøke er merket som usikker, ber vi deg ta kontakt med oss.
                  </div>
                  <div className="telia-p telia-p--paragraph-100">
                    <Link href="https://www.telia.no/bedrift/kundeservice/mobil/" passHref={true}>
                      <TeliaLink>Kundeservice Bedrift Mobil</TeliaLink>
                    </Link>
                  </div>
                  <div className="telia-p telia-p--paragraph-100">
                    <TeliaList listTag="ul">
                      <li>TeliaNorge AS</li>
                      <li>Organisasjonsnummer 981 929 055</li>
                      <li>Lørenfaret 1</li>
                      <li>0580 Oslo</li>
                    </TeliaList>
                  </div>
                </div>
              </TeliaAccordionItem>
            </TeliaAccordion>

          </div>
        </div>
      </div>

      <TeliaFooter>
          <section slot="social">
          </section>
          <section slot="navigation">
            <TeliaFooterNavigation links={links}/>
          </section>
          <section slot="legal">
            <TeliaFooterLegal copyright="© Telia Company">
              <div slot="contacts">
                <TeliaList listTag="ul">
                  <li>TeliaNorge AS</li>
                  <li>Organisasjonsnummer 981 929 055</li>
                  <li>Lørenfaret 1</li>
                  <li>0580 Oslo</li>
                </TeliaList>
              </div>
              <section slot="additional">
                <Link href="https://www.telia.no/personvern/" passHref={true}>
                  <TeliaLink darkBackground>Personvern og cookies</TeliaLink>
                </Link>
              </section>  
            </TeliaFooterLegal>
          </section>
        </TeliaFooter>

    </main>
  )
}
