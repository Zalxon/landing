import { fetchFrame } from "node-iframe";

export default async function handler(req, res) {

    let veryan = await fetchFrame({ url: "https://human.biodigital.com/viewer?m=production/maleAdult/dental_cavities.json&background=${bgColor}&bgstd=transparent&ui-annotations=true&ui-panel=false&imageDisplay=fallback&ui-all=false&ui-info=false&dk=e6d92924b104d99964ff488a3218136c73234d9e" });


    console.log("veryan: ", veryan)

    // veryan = veryan.replace('<base href="/viewer/">', '<base href="https://human.biodigital.com/viewer/">')
    // veryan = veryan.replace('src="', 'src="https://human.biodigital.com/')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(veryan); 
    res.end();
}
