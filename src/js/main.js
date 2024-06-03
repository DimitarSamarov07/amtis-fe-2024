// Продължи с твоя vanilla JavaScript код тук.
const templateFirstDesserts = `
                        <section class="food-img-card-wrapper">
                            <img
                                src="./assets/{image}"
                                alt="{name}">
                        </section>
                        <h2>{name}</h2>
                        <img class="separator" src="./assets/separator.png" alt="">
                        <p>{shortDesc}</p>
                        <a href="#learn-more">НАУЧЕТЕ ПОВЕЧЕ</a>
     `


const templateSecondDesserts = `
                    <section class="desert-img-wrapper">
                        <img
                            src="./assets/{image}"
                            alt="{name}">
                    </section>
                    <section class="desert-titles">
                        <h2>{name}</h2>
                        <p>{longDesc}</p>
                        <p><strong>Основни съставки:</strong> {ingredients}</p>
                    </section>
                    <ul class="food-nutrition-table">
                        <li>
                            <p>Калории:</p>
                            <strong class="number-strong">{calories}</strong>
                        </li>
                        <li>
                            <p>Общо мазнини:</p>
                            <strong class="number-strong">{fat}g</strong>
                        </li>
                        <li>
                            <p>Наситени мазнини:</p>
                            <strong class="number-strong">{saturatedFat}g</strong>
                        </li>
                        <li>
                            <p>Общо въглехидрати:</p>
                            <strong class="number-strong">{carbs}g</strong>
                        </li>
                        <li>
                            <p>Протеин:</p>
                            <strong class="number-strong">{protein}g</strong>
                        </li>
                        <li>
                            <p>Захари:</p>
                            <strong class="number-strong">{sugar}g</strong>
                        </li>
                        <li>
                            <p>Натрий:</p>
                            <strong class="number-strong">{sodium} mg</strong>
                        </li>
                        <li>
                            <p>Холестерол:</p>
                            <strong class="number-strong">{cholesterol} mg</strong>
                        </li>
                    </ul>

`


let desserts = await fetch("http://localhost:4000/desserts").then(x => x.json());
let domFirstDesserts = document.querySelector(".landing-foods ul")
let domSecondDesserts = document.querySelector(".deserts > h3")
for (const dessert of desserts) {
    let childFirst = document.createElement("li")
    childFirst.className = "food-card";

    let newStrFirst = templateFirstDesserts.replace("{image}", dessert.image);
    newStrFirst = newStrFirst.replaceAll("{name}", dessert.name);
    newStrFirst = newStrFirst.replace("{shortDesc}", dessert.description_short);


    let childSecond = document.createElement("article")
    childSecond.className = "desert-detailed-card";

    let newStrSecond = templateSecondDesserts.replace("{image}", dessert.image);
    newStrSecond = newStrSecond.replaceAll("{name}", dessert.name);
    newStrSecond = newStrSecond.replace("{longDesc}", dessert.description_long);
    newStrSecond = newStrSecond.replace("{ingredients}", dessert.ingredients_text);
    newStrSecond = newStrSecond.replace("{calories}", dessert.nutrition.calories);
    newStrSecond = newStrSecond.replace("{fat}", dessert.nutrition.totalFat);
    newStrSecond = newStrSecond.replace("{saturatedFat}", dessert.nutrition.saturatedFat);
    newStrSecond = newStrSecond.replace("{carbs}", dessert.nutrition.totalCarbs);
    newStrSecond = newStrSecond.replace("{protein}", dessert.nutrition.protein);
    newStrSecond = newStrSecond.replace("{sugar}", dessert.nutrition.sugars);
    newStrSecond = newStrSecond.replace("{sodium}", dessert.nutrition.sodium);
    newStrSecond = newStrSecond.replace("{cholesterol}", dessert.nutrition.cholesterol);

    childFirst.innerHTML += newStrFirst;
    childSecond.innerHTML += newStrSecond;

    domFirstDesserts.appendChild(childFirst)
    domSecondDesserts.insertAdjacentElement("afterend", childSecond)


}


let el = document.querySelector(".deserts article:last-of-type")

let elToInsert = document.createElement("section");
elToInsert.className = "contact-us"
elToInsert.innerHTML = ` <p>Ако имате интерес към нашите вкусове можете да се свържете с нас , за да уточним цени, методи на
                    достава и условия за съхранение.</p>
                <button class="make-a-request-btn">Направи заявка</button>`
el.insertAdjacentElement("afterend", elToInsert);

