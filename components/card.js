import ico from '../styles/ico.module.css'
import utilStyles from '../styles/utils.module.css'

const now = new Date();
const dateSeed = new Date("02/01/2022");
const dateSeedEnd = new Date("02/31/2022");
const dateRound1 = new Date("03/01/2022");
const dateRound1End = new Date("03/15/2022");
const dateRound2 = new Date("03/16/2022");
const dateRound2End = new Date("03/31/2022");

const dateSeedText = "01 feb.";
const dateSeedEndText =  "31 feb.";
const dateRound1Text = "01 mar.";
const dateRound1EndText =  "15 mar.";
const dateRound2Text = "16 mar.";
const dateRound2EndText = "31 mar.";

let etape;
let etapeClass;

function verifDate(start, end) {
    if(now >= start && now <= end) {
        etape = "In progress";
        etapeClass = ico.active;
    } else if(now >= end) {
        etape = "Completed";
        etapeClass = ico.inactive;
    } else {
        etape = "It's coming";
        etapeClass = ico.pending;
    }
}

export default function Card({title}) {
    switch (title) {
        case "Seed Round":
            verifDate(dateSeed, dateSeedEnd);
            var contenu = (
                <ul className={ico.ul}>
                    <li>Date : {dateSeedText} to {dateSeedEndText}</li>
                    <li>Price : 0,001$</li>
                    <li>Cliff : 6 months</li>
                    <li>Vesting : 1 year</li>
                    <li>Target : $400 000</li>
                    <li>Invest min : $2 500</li>
                </ul>
            )
            break;
        case "Public Round 1":
            verifDate(dateRound1, dateRound1End);
            var contenu = (
                <ul className={ico.ul}>
                    <li>Date : {dateRound1Text} to {dateRound1EndText}</li>
                    <li>Price : 0,002$</li>
                    <li>Cliff : 3 months</li>
                    <li>Vesting : 1 year</li>
                    <li>Target : $2 000 000</li>
                    <li>Invest min : $1 000</li>
                </ul>
            )
            break;
        case "Public Round 2":
            verifDate(dateRound2, dateRound2End);
            var contenu = (
                <ul className={ico.ul}>
                    <li>Date : {dateRound2Text} to {dateRound2EndText}</li>
                    <li>Price : 0,003$</li>
                    <li>Cliff : N/a</li>
                    <li>Vesting : N/a</li>
                    <li>Target : $10 000 000</li>
                    <li>Invest min : $200</li>
                </ul>
            )
            break;
        default:
            break;
    }
    return (
        <div className={ico.card}>
            <span className={`${ico.statut} ${etapeClass}`}>{etape}</span>
            <h3 className={utilStyles.h3}>{title}</h3>
            {contenu}
        </div>
        )
}