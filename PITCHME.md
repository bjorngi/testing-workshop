---?image=./img/bg.compressed.jpg
# @color[#f6f6f6](Testing)

Bjørn Gilstad
@snap[south span-100]
gitpitch.com/bjorngi/testing-workshop
@snapend


---
## Typer tester
* Enhetstester/Unit tester
* Integrasjontester
* Funksjonelle tester (E2E, end-to-end)


---?color=white
@snap[west span-50]
![Test pyramid](./img/testing-pyramid.png)
@snapend

@snap[north east span-50]
![Test pyramid](./img/test-diamond.png)
@snapend


---
## Semantikk

* **Test launcher**
  * @size[0.7em](Programmet som kjører testene)
  * @size[0.7em](Jest, Karma, Jasmine, TestCafe, Cypress)

* **Assertion functions**
  * @size[0.7em](Funksjoner som evaluerer resultat av tester)
  * @size[0.7em](Chai, Jasmine, Jest, Unexpected, Expected, TestCafe)

---
## Semantikk

* **Mocks, spies og stubs**
  * @size[0.7em](*Doubles* som brukes i testing)
  * @size[0.7em](Bruker fixtures)
  * @size[0.7em](Sinon, Jasmine, enzyme, Jest, testdouble)

* **Test libraries**
  * @size[0.7em](Samling av launcher, assertion function, mocks, spies og stubs)
  * @size[0.7em](Jest, Jasmine, Mocha)

* **Browser kontrollere**
  * @size[0.7em](Tar kontroll over browser og simulerer bruk)
  * @size[0.7em](Selenium, Nightwatch, Nightmare, Phantom, Puppeteer, TestCafe, Cypress)


---
## Semantikk

* **Accessibility testing**
  * @size[0.7em](Sjekke universell utforming og best practices)
  * @size[0.7em](Pa11y, lighthouse, AATT, Jest-axe)

* **Regresjonstester**
  * @size[0.7em](Tidligere laget tester som kjører og bekrefter at koden fremdeles fungerer)
  * @size[0.7em](Performance tester som kan validere at koden ikke har blitt tregere)

* **Visual regression tests**
  * @size[0.7em](Sjekker visuelle forskjeller)
  * @size[0.7em](Applitools, Percy, Wraith, WebdriverCSS)


---
## Test strategi
* Hva tester vi
* Hvorfor tester vi det
* Hva er målene med testene
<br /><br />
* Tester påvirker kode og arkitektur
* Highest value tests
  * Kjøretid, tid å lage, coverage, kompleksitet
* ~~Alle~~ De fleste tester er bedre enn ingen tester

---
## Ikke bare tester
* Linting/Statisk kodeanalyse
* Defensive coding
* Typing
* Lesbarhet
* Separation of concerns
---
## Enhetstester
* Tester funksjoner isolert
* Feedback under utvikling
* Raske
* Enkelt å lage
* Mocking/Injection
* Lett å teste **<u>rene funksjoner</u>**

<div class='test-types'>
  <span class='test-type unit'>Jest</span>
  <span class='test-type unit'>Jasmine</span>
  <span class='test-type unit'>Mocha</span>
  <span class='test-type unit'>Karma</span>
</div>

---
@code[ts](snippts/src/tests/jest.test.js)
---?color=#212224
![Output](./img/jest-out.png)

---
## Oppgave 1
* Last ned eksempel kode:
  * https://github.com/bjorngi/testing-workshop
* Implementer sortering på navn
* Refaktorer og lag enhetstester (med Jest)


<div class='test-types'>
  <span class='test-type unit'>Jest</span>
  <span class='test-type unit'>Jasmine</span>
  <span class='test-type unit'>Karma</span>
  <span class='test-type unit'>Karma</span>
</div>

---
## Integrasjontester
* Tester flere deler sammen
  * @size[0.7em](funksjoner, klasser, komponenter)
* Stort spenn
* Uenighet i definisjon
* Mocking av eksterne tjenester


<div class='test-types'>
  <span class='test-type unit'>Jest</span>
  <span class='test-type unit'>Enzyme</span>
  <span class='test-type unit'>react-testing-library</span>
</div>

---
## Oppgave 2
Legg integrasjonstester til prosjektet
* Mock API

<span class='test-type e2e'>Enzyme</span>

---
## Code coverage
* Visualiserer hvilke deler av koden som er testet
* En indikator ikke mål

---
![Instabul](./img/instanbul.png)

---
## Oppgave 3
Generer test coverage

<span class='test-type integration'>Instabul</span>
<span class='test-type integration'>Blanket</span>

---
## Funksjonelle tester
* End-to-end
* Automatiserte tester av hele systemet
* Kjøres i miljøet som skal brukes

<div class='test-types'>
  <span class='test-type unit'>Selenium</span>
  <span class='test-type unit'>Cypress</span>
  <span class='test-type unit'>Nightmare</span>
  <span class='test-type unit'>Nightwatch</span>
  <span class='test-type unit'>Puppeteer</span>
  <span class='test-type unit'>TestCafé</span>
</div>

---
@code[ts](./examples/cypress.js)

---
![Cypress](./img/cypress.png)

---

## Oppgave 4
Sett opp funksjonelle tester til prosjektet

<div class='test-types'>
  <span class='test-type unit'>Selenium</span>
  <span class='test-type unit'>Cypress</span>
  <span class='test-type unit'>Nightmare</span>
  <span class='test-type unit'>Nightwatch</span>
  <span class='test-type unit'>Puppeteer</span>
  <span class='test-type unit'>TestCafé</span>
</div>

---
## Oppgave 5
Sett opp Accessibility Testing

<div class='test-types'>
  <span class='test-type e2e'>Pa11y</span>
  <span class='test-type e2e'>AATT</span>
  <span class='test-type e2e'>Lighthouse</span>
  <span class='test-type e2e'>Jest-axe</span>
</div>


---
## Oppgave 6
Sett opp Visual Regression Tests
<div class='test-types'>
  <span class='test-type e2e'>Applitools</span>
  <span class='test-type e2e'>Percy</span>
  <span class='test-type e2e'>Wraith</span>
  <span class='test-type e2e'>WebdriverCSS</span>
</div>

---

## "Jobblekse"
Finn en kodesnutt i prosjektet ditt og skriv en test til den (trenger ikke å være din egen kode).
