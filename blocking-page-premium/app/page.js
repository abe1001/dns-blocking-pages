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


            <TeliaHeroBanner imgAlt='Telia Trygg Surfing' 
                             imgSrc='images/Telia_Company_Reinvention_90_lg.png'
                             mediumSet='images/Telia_Company_Reinvention_90_md.png'
                             smallSet='images/Telia_Company_Reinvention_90_sm.png'
                             backgroundColor='rgb(10, 27, 35)'
                             backgroundCrop='cover'
                             backgroundImageFrom='lg'>

              <div className="telia-text-spacing" style={{color: foundations.colors.white}}>
                <div className="telia-heading--title-500 title-500  hydrated">
                  Telia Trygg Surfing                  
                </div>
                <div className="telia-p telia-p--paragraph-100 hydrated">
                  Beskytt de ansattes mobiler og sikre bedriften mot angrep
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
                      For din sikkerhet har Telia Trygg Surfing blokkert tilgangen til denne nettsiden. For å forhindre potensiell skade fra trusler på internett anbefaler vi deg å ikke åpne den.
                    </div>
                    
                    <div className="telia-p telia-p--paragraph-100 title-100">
                      Trusler du er beskyttet mot:                      
                    </div>

                    <div className="telia-grid">

                      <div className="telia-row telia-row--md">
                        <div className="telia-col telia-col-2">
                          <div name="botnet" className="telia-icon telia-icon--lg hydrated">
                            <span aria-label="botnet icon" className="telia-icon__container">
                              <svg id="e30T7HXfpRE1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="translate(-.000001-1.007054)"><rect width="5.018482" height="9.249692" rx="1" ry="1" transform="matrix(1 0 0 1.148939 8.443294 15.792114)" fill="none" stroke="#000" stroke-width="3"/><rect width="5.018482" height="9.249692" rx="1" ry="1" transform="matrix(1 0 0 1.148939 51.016501 15.792114)" fill="none" stroke="#000" stroke-width="3"/><ellipse rx="6.00246" ry="3.247233" transform="matrix(1 0 0 1.060606 32 8.462486)" fill="none" stroke="#000" stroke-width="3"/><rect width="32.27546" height="16.92499" rx="0" ry="0" transform="translate(15.86227 9.643285)" fill="#fff" stroke-width="0"/><ellipse rx="2.706027" ry="2.361624" transform="matrix(1 0 0 1.125001 26.589028 20.762617)" fill="none" stroke="#000" stroke-width="2"/><ellipse rx="2.706027" ry="2.361624" transform="matrix(1 0 0 1.125001 38.298745 20.762617)" fill="none" stroke="#000" stroke-width="2"/><line x1="2.853628" y1="0.787207" x2="-2.853628" y2="-0.787207" transform="matrix(1.171339-.050226 0.04284 0.999082 25.918767 17.175978)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><line x1="2.853628" y1="0.787207" x2="-2.853628" y2="-0.787207" transform="matrix(-1.171339 0.050226 0.04284 0.999082 38.298745 17.175978)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><rect width="40.147602" height="15.547356" rx="2" ry="2" transform="matrix(.923503 0 0 1.37975 13.570541 9.938498)" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="3"/></g><g transform="matrix(1.00514 0 0 1-3.214912 3.140553)"><rect width="26.243543" height="15.688376" rx="3" ry="3" transform="matrix(1 0 0 1.173913 5.756457 38.43126)" fill="none" stroke="#000" stroke-width="3"/><rect width="6.4" height="6.4" rx="0" ry="0" transform="matrix(.284947 0 0 0.302456 27.058462 52.397296)" stroke-width="0"/><rect width="6.4" height="6.4" rx="0" ry="0" transform="matrix(.284947 0 0 0.302456 24.17388 52.397296)" stroke-width="0"/></g><g transform="translate(29.976521 3.140552)"><rect width="26.243543" height="15.688376" rx="3" ry="3" transform="matrix(1 0 0 1.173913 5.756457 38.43126)" fill="none" stroke="#000" stroke-width="3"/><rect width="6.4" height="6.4" rx="0" ry="0" transform="matrix(.284947 0 0 0.302456 27.058462 52.397296)" stroke-width="0"/><rect width="6.4" height="6.4" rx="0" ry="0" transform="matrix(.284947 0 0 0.302456 24.17388 52.397296)" stroke-width="0"/></g><line x1="6.56947" y1="-5.388747" x2="-6.56947" y2="5.388747" transform="matrix(.924369 0 0 1.030081 19.534391 35.933758)" fill="none" stroke="#000" stroke-width="3"/><line x1="6.56947" y1="-5.388747" x2="-6.56947" y2="5.388747" transform="matrix(-.924369 0 0 1.030081 44.574357 35.933758)" fill="none" stroke="#000" stroke-width="3"/></svg>
                            </span>
                          </div>
                        </div>
                        <div className="telia-col telia-col-10">
                          <div className="title-100">Botnets</div>
                          <div className="telia-p telia-p--paragraph-100">
                            Et botnet misbruker datamaskinen din for å angripe andre. Selve botnettet er et nettverk av datamaskiner som styres automatisk. Angriperen skjuler dermed sin identitet, og det ser ut som om angrepet kom fra datamaskinen din
                          </div>
                        </div>
                      </div> 

                      <div className="telia-row telia-row--md">
                        <div className="telia-col telia-col-2">
                          <div name="phishing" className="telia-icon telia-icon--lg hydrated">
                            <span className="telia-icon__container">
                              <svg id="eyaGExOcqY11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M52,12h-40c-4.41618.0051-7.99495,3.5838-8,8v24c.00505,4.4162,3.58382,7.9949,8,8h40c4.4162-.0051,7.9949-3.5838,8-8v-24c-.0051-4.4162-3.5838-7.9949-8-8Zm0,4c.3459.0047.6898.0548,1.0227.1491L39.1718,30h-14.3437L10.9772,16.1491c.3329-.0943.6768-.1444,1.0228-.1491h40Zm4,28c-.0023,2.2081-1.7918,3.9976-4,4h-40c-2.20816-.0024-3.99765-1.7919-4-4v-24c.00469-.346.05482-.6899.14911-1.0228L22,32.8281c.7483.7527,1.7667,1.1747,2.8281,1.1719h14.3438c1.0614.0028,2.0798-.4192,2.8281-1.1719L55.8509,18.9772c.0943.3329.1444.6768.1491,1.0228v24Z" transform="matrix(.966501-.256664 0.256664 0.966501-7.336577 16.001765)" clip-rule="evenodd" fill-rule="evenodd"/><line x1="0" y1="-6.610407" x2="0" y2="6.610407" transform="matrix(1 0 0 0.818815 36.937982 13.700967)" fill="none" stroke="#000" stroke-width="4"/><ellipse rx="3.082851" ry="3.005781" transform="translate(36.855492 5.472062)" fill="none" stroke="#000" stroke-width="3"/><path d="M25.603083,15.876686h-5.549133c0,0,.344493,3.06712-.000003,7.090558-.143179,1.672216,3.504199,4.037138,4.932563,4.103932c2.008353.093914,5.086705-2.703217,5.086705-2.703217" transform="matrix(1 0 0 1.254482 4.470138-4.577903)" fill="none" stroke="#000" stroke-width="4"/></svg>
                            </span>
                          </div>
                        </div>
                        <div className="telia-col telia-col-10">
                          <div className="title-100">Phishing</div>
                          <div className="telia-p telia-p--paragraph-100">
                            Phishing brukes tradisjonelt om manipulasjonsforsøk hvor angriperen benytter e-mail, SMS eller telefon som middel. I tillegg benyttes begrepet spear-phishing. Dette er phishing-angrep som er målrettet mot en enkeltperson, en rolle eller en funksjon, og inneholder som regel veldig spesifikk personlig informasjon.
                          </div>
                        </div>
                      </div>

                      <div className="telia-row telia-row--md">
                          <div className="telia-col telia-col-2">
                            <div name="malware" className="telia-icon telia-icon--lg hydrated">
                              <span className="telia-icon__container">
                                <svg id="ebp8R7Q4iN01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M52,12h-40c-2.12099.0024-4.15441.8461-5.65417,2.3458s-2.3434,3.5332-2.34583,5.6542v20c.00243,2.121.84606,4.1544,2.34583,5.6542C7.84559,47.1539,9.87901,47.9976,12,48h40c2.121-.0024,4.1544-.8461,5.6542-2.3458C59.1539,44.1544,59.9976,42.121,60,40v-20c-.0024-2.121-.8461-4.1544-2.3458-5.6542C56.1544,12.8461,54.121,12.0024,52,12Zm4,28c-.0011,1.0605-.4228,2.0773-1.1727,2.8273-.75.7499-1.7668,1.1716-2.8273,1.1727h-40c-1.0605-.0011-2.07734-.4228-2.82726-1.1727C8.42283,42.0773,8.00106,41.0605,8,40v-20c.00106-1.0605.42283-2.0773,1.17274-2.8273s1.76676-1.1716,2.82726-1.1727h40c1.0605.0011,2.0773.4228,2.8273,1.1727.7499.75,1.1716,1.7668,1.1727,2.8273v20ZM44,52c0,.5304-.2107,1.0391-.5858,1.4142s-.8838.5858-1.4142.5858h-20c-.5304,0-1.0391-.2107-1.4142-.5858s-.5858-.8838-.5858-1.4142.2107-1.0391.5858-1.4142.8838-.5858,1.4142-.5858h20c.5304,0,1.0391.2107,1.4142.5858s.5858.8838.5858,1.4142Z"/><ellipse rx="5.703276" ry="10.250482" transform="matrix(1 0 0 0.904321 32 31)" fill="none" stroke="#000" stroke-width="2"/><path d="M27.915222,24.508671c0,0,2.890173.770712,4.161849.770712s4.315993-.770712,4.315993-.770712" transform="translate(0 1)" fill="none" stroke="#000" stroke-width="2"/><line x1="0.077071" y1="-7.013487" x2="-0.077071" y2="7.013487" transform="translate(32 32.984586)" fill="none" stroke="#000" stroke-width="2"/><line x1="0.077072" y1="0" x2="-0.077072" y2="0" transform="translate(95.506744 27.745665)" fill="none" stroke="#3f5787" stroke-width="0.64"/><line x1="1.001927" y1="1.618498" x2="-1.001927" y2="-1.618497" transform="translate(28.300578 20.190752)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><line x1="1.001927" y1="1.618498" x2="-1.001927" y2="-1.618497" transform="matrix(-1 0 0 1 35.300578 20.190752)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M26.836224,25.279383l-3.54528-2.620423-3.236994,2.928708" transform="translate(0 1.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M26.836224,25.279383l-3.54528-2.620423-3.236994,2.928708" transform="matrix(-1 0 0 1 63.890174 1.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M25.911368,30.057803l-3.853565-.154142-2.466282,2.003853" transform="translate(-.308283 0.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M25.911368,30.057803l-3.853565-.154142-2.466282,2.003853" transform="matrix(-1 0 0 1 64.194605 0.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M26.836224,35.452794l-3.54528-.154143-3.082852,4.007707" transform="translate(0 0.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/><path d="M26.836224,35.452794l-3.54528-.154143-3.082852,4.007707" transform="matrix(-1 0 0 1 63.890173 0.000001)" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>
                              </span>
                            </div>
                          </div>
                          <div className="telia-col telia-col-10">
                            <div className="title-100">Malware</div>
                            <div className="telia-p telia-p--paragraph-100">
                              Malware er en fellesbetegnelse for skadelige programmer som er blitt installert på datamaskinen din, ofte uten at du har gitt tillatelse til det.
                              Du kan få malware hvis du har kommet til å klikke på en ukjent lenke i en e-post, har lastet ned et ukjent program, eller har åpnet en fil fra en infisert minnepinne.                            
                            </div>
                            <div className="telia-p telia-p--paragraph-100">
                              Et eksempel på skadelig programvare er løsepengevirus, eller <b>ransomware</b>. Viruset er designet til å lamme digitale systemer ved å kryptere filer. Deretter kreves det løsepenger for å låse opp krypteringen. Aktørene kan også hente ut dataene før de krypteres, og deretter kreve penger for å ikke selge eller lekke dataene på internett. Ofte er det snakk om bedriftssensitiv informasjon eller personlige og private detaljer. 
                            </div>
                          </div>
                        </div>

                        <div className="telia-row telia-row--md">
                          <div className="telia-col telia-col-2">
                            <div name="spam" className="telia-icon telia-icon--lg hydrated">
                              <span className="telia-icon__container">
                                <svg id="e5uW4wi7TQO1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M15.02623,25.234873L15.101766,3.12354h32.969746l.043453,23.318951" transform="matrix(1.014492 0 0 1.078211-.096985 0.830176)" fill="none" stroke="#000" stroke-width="3"/><path d="" fill="none" stroke="#3f5787" stroke-width="0.5"/><path d="M31.673248,10.412308l.091386,10.509473" transform="translate(0 0.639709)" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/><path d="" fill="none" stroke="#3f5787" stroke-width="0.5"/><ellipse rx="0.724571" ry="0.724571" transform="matrix(2.927889 0 0 2.986522 31.745067 28.934479)" stroke-width="0"/><path d="M7.54715,21.470101c0,0-1.279415,1.370801-1.370801,3.198536-.008023.160456-.046328,25.267797.091387,25.405512.27416,3.929629,2.832989,5.665977,5.757364,5.848751c21.069625-.010707,33.301906-.091387,40.118776-.091387c3.236385,0,6.122911-2.741604,6.122911-5.757365c0-.182774.127865-22.391313,0-24.948578q-.091388-1.827734-1.827736-3.564082c0,0-14.337381,14.713918-14.53049,14.80465-1.096641,1.096641-2.027827,1.977817-3.381309,1.827735-.274161.091386-13.15969.182773-13.43385,0-1.005254-.182774-1.775294-1.080508-2.741602-2.101895.235215.198906-14.684565-14.501792-14.80465-14.621877Z" transform="translate(-.091386-.365544)" fill="none" stroke="#000" stroke-width="4"/><path d="M8.186858,20.46485l7.036778-7.493712" transform="translate(0-.091387)" fill="none" stroke="#000" stroke-width="4"/><path d="M8.186858,20.46485l7.036778-7.493712" transform="matrix(-1 0 0 1 64.050201 0.27416)" fill="none" stroke="#000" stroke-width="4"/></svg>
                              </span>
                            </div>
                          </div>
                          <div className="telia-col telia-col-10">
                            <div className="title-100">Spam</div>
                            <div className="telia-p telia-p--paragraph-100">
                              Spam er e-post du ikke har bedt om å motta, og kalles på norsk søppelpost. Ofte inneholder spam reklame- og lokketilbud.  
                            </div>
                          </div>
                        </div>

                        <div className="telia-row telia-row--md">
                          <div className="telia-col telia-col-2">
                            <div name="hacked" className="telia-icon telia-icon--lg hydrated">
                              <span className="telia-icon__container">
                                <svg id="eotbSa7q3i61" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="matrix(.879671 0 0 0.877137 3.850526 3.931614)"><rect width="54.431534" height="36.860736" rx="3" ry="3" transform="matrix(1 0 0 1.083554 4.784233 12.029701)" fill="none" stroke="#000" stroke-width="4"/><rect width="54.431534" height="6.162485" rx="0" ry="0" transform="translate(4.784233 12.029702)" stroke-width="0"/><ellipse rx="2.396518" ry="2.248898" transform="matrix(.594028 0 0 0.543293 8.495365 14.506839)" fill="#fff" stroke-width="0"/><ellipse rx="2.396518" ry="2.248898" transform="matrix(.594028 0 0 0.543293 12.495365 14.506839)" fill="#fff" stroke-width="0"/><ellipse rx="2.396518" ry="2.248898" transform="matrix(.594028 0 0 0.543293 16.495365 14.506839)" fill="#fff" stroke-width="0"/><rect width="30.81238" height="1.597679" rx="0" ry="0" transform="translate(22.592076 13.85563)" fill="#fff" stroke-width="0"/></g><g transform="matrix(1 0 0 1.192656-.737876-9.803165)"><path d="M29.982896,30.768394L9.657268,57.338643l41.018587.122444L29.982896,30.768394Z" transform="translate(2.571316-.857103)" fill="#fff" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><line x1="0" y1="-4.775298" x2="0" y2="4.775298" transform="matrix(-1 0 0 0.871795 32.55421 42.522974)" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/><ellipse rx="1.652987" ry="1.469322" transform="translate(32.717424 51.461354)" stroke-width="0"/></g></svg>
                              </span>
                            </div>
                          </div>
                          <div className="telia-col telia-col-10">
                            <div className="title-100">Kompromittert nettsted</div>
                            <div className="telia-p telia-p--paragraph-100">
                              Et kompromittert nettsted refererer til et nettsted hvis kode har blitt manipulert til å handle på måter som gagner en 3rd part, ofte til skade for deg og dine brukere.                            </div>
                          </div>
                        </div>

                        <div className="telia-row telia-row--md">
                          <div className="telia-col telia-col-2">
                            <div name="bitcoin" className="telia-icon telia-icon--lg hydrated">
                              <span aria-label="focus icon" className="telia-icon__container">
                                <svg id="eVYhnPZWSCv1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="15.544568" ry="15.147896" transform="matrix(1.095758 0 0 1.118272 31.516507 24.848322)" fill="none" stroke="#000" stroke-width="4"/><g transform="matrix(1.243314 0 0 1.131711-8.880627-3.600664)"><line x1="0" y1="1.375358" x2="0" y2="-1.375359" transform="matrix(1.392114 0 0 1.498462 31.486993 17.421679)" fill="none" stroke="#000" stroke-width="2"/><line x1="0" y1="1.375358" x2="0" y2="-1.375359" transform="matrix(-1.392114 0 0 1.520529 31.916437 33.566013)" fill="none" stroke="#000" stroke-width="2"/><path d="M28.778928,19.795541v10.592946c0,0,4.16651-.069704,4.531995-.069704c2.704576-1.04554,2.850773-4.182163-.21929-5.297404-.146199-.209103-3.289354-.069705-3.289354-.069705s3.216257-.209109,3.727935-.069703c2.412191-.557623,2.119803-4.600378-.292387-5.018597-.219288-.069704-4.458899-.067833-4.458899-.067833Z" transform="matrix(1.363117 0 0 1.176868-10.838732-4.288498)" fill="none" stroke="#000" stroke-width="2"/></g><path d="M32,38.12321v9.992501" transform="translate(.377173 3.644791)" fill="none" stroke="#000" stroke-width="3"/><path d="M42.426773,33.182453l.149333,7.914626l4.330644,7.914626" transform="translate(.377174 3.644791)" fill="none" stroke="#000" stroke-width="3"/><path d="M42.426773,33.182453l.149333,7.914626l4.330644,7.914626" transform="matrix(-1 0 0 1 64.009363 3.644791)" fill="none" stroke="#000" stroke-width="3"/><ellipse rx="3.210651" ry="3.285317" transform="translate(32.377173 54.595178)" stroke-width="0"/><ellipse rx="3.210651" ry="3.285317" transform="translate(48.549592 54.595178)" stroke-width="0"/><ellipse rx="3.210651" ry="3.285317" transform="translate(16.131951 54.595178)" stroke-width="0"/></svg>
                            </span>
                            </div>
                          </div>
                          <div className="telia-col telia-col-10">
                            <div className="title-100">Kryptomining</div>
                            <div className="telia-p telia-p--paragraph-100">
                              Ondsinnet kryptomining er en online trussel som gjemmer seg på en datamaskin eller mobilenhet og bruker maskinens ressurser til å "mine" former for online valuta kjent som kryptovalutaer. Ondsinnede kryptominere kommer ofte gjennom nedlasting av nettlesere eller useriøse mobilapper. Kryptokapring kan kompromittere alle slags enheter, inkludert stasjonære datamaskiner, bærbare datamaskiner, smarttelefoner og til og med nettverksservere. 
                            </div>
                          </div>
                        </div>
 
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
