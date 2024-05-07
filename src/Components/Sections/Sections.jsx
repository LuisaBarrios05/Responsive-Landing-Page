import './SectionsStyles.css'
import { useState, useEffect } from 'react';

const Sections = () => {
    const [currentTableIndex, setCurrentTableIndex] = useState(0);
    const [tables, setTables] = useState([]); 

    console.log(tables)

    function showTable(index) { 
        tables.forEach((table) => { table.style.display = 'none'; });
        tables[index].style.display = 'block';
    }

    const changeTable = (direction) => {
        let newIndex = currentTableIndex + direction;
        if (newIndex < 0) {
            newIndex = tables.length - 1;
        } else if (newIndex >= tables.length) {
            newIndex = 0;
        }
        setCurrentTableIndex(newIndex);
        showTable(newIndex);
    };

    useEffect(() => {setTables(document.querySelectorAll('.slide-table'))}, [])
    
    return (
        <div className="main">
            <section class="main-exchange-container">
                <div class="backgroundImg"></div>
                <div class="main-exchange-container--title">
                    <h2>Visibilizamos todas las tasas de cambio.</h2>
                    <p>
                        Traemos información en tiempo real de las casas de cambio y las
                        monedas más importantes del mundo.
                    </p>
                </div>
                <div class="main-tables-container">
                    {/* Coins table */}
                    <div class="main-currency-table slide-table ">
                        <p class="currency-table--title">Monedas</p>
                        <div class="currency-table--container">
                            <table>
                                <tr>
                                    <td class="table__top-left">Bitcoin</td>
                                    <td class="table__top-right table__right">
                                        $1.96 <span class="down"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ethereum</td>
                                    <td class="table__right">$0.07 <span class="up"></span></td>
                                </tr>
                                <tr>
                                    <td>Ripple</td>
                                    <td class="table__right">$2.15 <span class="down"></span></td>
                                </tr>
                                <tr>
                                    <td class="table__bottom-left">Stellar</td>
                                    <td class="table__bottom-right table__right">
                                        $4.96 <span class="down"></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="currency-table--date">
                            <p><b>Actualizado:</b> 19 Julio 23:45</p>
                        </div>
                    </div>
                    {/* Commissions table */}
                    <div class="main-commissions-table slide-table ">
                        <p class="commissions-table--title">Comisiones</p>
                        <div class="commissions-table--container">
                            <table>
                                <tr>
                                    <td class="table__top-left">Bitrade</td>
                                    <td class="table__top-right table__right">$12.96</td>
                                </tr>
                                <tr>
                                    <td>Bitpreco</td>
                                    <td class="table__right">$13.07</td>
                                </tr>
                                <tr>
                                    <td>Novadax</td>
                                    <td class="table__right">$13.15</td>
                                </tr>
                                <tr>
                                    <td class="table__bottom-left">Coinext</td>
                                    <td class="table__bottom-right table__right">$14.96</td>
                                </tr>
                            </table>
                        </div>
                        <div class="commissions-table--date">
                            <p><b>Actualizado:</b>19 Julio 23:48</p>

                        </div>

                    </div>
                    <button className="button-table" onClick={() => changeTable(-1)}>
                        Anterior
                    </button>
                    <button className="button-table" onClick={() => changeTable(1)}>
                        Siguiente
                    </button>
                </div>
            </section>
            <section class="main-product-detail">
                <span class="product-detail--batata-logo"></span>
                <div class="product-detail--title">
                    <h2>Creamos un producto sin comparación.</h2>
                    <p>Confiable y diseñado para su uso diario.</p>
                </div>
                <div class="product-cards--container">
                    <article class="product-detail--card">
                        <span class="clock"></span>
                        <p class="product--card_title">Tiempo real</p>
                        <p class="product--card_body">
                            Nuestra API toma información minuto a minuto sobre las tasas que
                            más determinan el comportamiento.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="eye"></span>
                        <p class="product--card_title">No hay tasas escondidas</p>
                        <p class="product--card_body">
                            Ni en la compra o al momento de exit, Batatabit siempre te muestra
                            el costo real de lo que estás adquiriendo.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="dollar"></span>
                        <p class="product--card_title">Compara monedas</p>
                        <p class="product--card_body">
                            No más rumores, con Batatabit sabrás el valor real de casa moneda en
                            el mercado actual.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="check"></span>
                        <p class="product--card_title">Información confiable</p>
                        <p class="product--card_body">
                            Nuestras fuentes están 100% verificadas y continuamos auditanmdo
                            su contenido mientras se actualizan.
                        </p>
                    </article>
                </div>
            </section>
            <section class="bitcoin-img-container">
                <h2>Conócelo hoy.</h2>
            </section>
            {/* Plans */}
            <section id="plans" class="main-plans-container">
                <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                <div class="plans-container--slider">
                    <div class="plans-container--card">
                        <div class="plan-card">
                            <h3 class="plan-card--title">Pago Anual</h3>
                            <p class="plan-card--price"><span>$</span> 99</p>
                            <p class="plan-card--saving">
                                *Ahorras $129 comparado el plan mensual.
                            </p>
                            <button class="plan-card--ca">Escoger este <span></span></button>
                        </div>
                    </div>
                    <div class="plans-container--card">
                        <p class="recommended">Recomendado</p>
                        <div class="plan-card">
                            <h3 class="plan-card--title">Pago Anual</h3>
                            <p class="plan-card--price"><span>$</span> 99</p>
                            <p class="plan-card--saving">
                                *Ahorras $129 comparado el plan mensual.
                            </p>
                            <button class="plan-card--ca">Escoger este <span></span></button>
                        </div>
                    </div>
                    <div class="plans-container--card">
                        <div class="plan-card">
                            <h3 class="plan-card--title">Pago Anual</h3>
                            <p class="plan-card--price"><span>$</span> 99</p>
                            <p class="plan-card--saving">
                                *Ahorras $129 comparado el plan mensual.
                            </p>
                            <button class="plan-card--ca">Escoger este <span></span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sections;