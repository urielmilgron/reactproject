const notices = [
    {
        id:"1",
        title:"Por presiones internas, el Gobierno confirma que postergó el aumento de la luz",
        subtitle: "Energía tenía previsto quitar subsidios a luz para hogares el mes pasado, pero lo posterga. Dice que lo hará desde este mes y las boletas llegarán en octubre. La presión k, de gobernadores e intendentes.",
        img:'https://www.clarin.com/img/2022/08/17/n3egZvwJe_360x240__1.jpg',
        textNotice:'El Gobierno admitió que postergó la suba en las boletas de luz para los hogares, tal como adelantó en exclusiva Clarín el sábado. La quita de subsidios, con el consecuente incremento en las facturas del servicio, estaba prevista para septiembre, pero se pasó a octubre, confirmó el Poder Ejecutivo.'
    },
    {
        id:"2",
        title:"Una vez más, avanzó en comisiones la iniciativa que prolonga el mando de la Sedena en la Guardia Nacional",
        subtitle:"De manera sorpresiva, los promotores de la 4T contaron con el apoyo del PRI en el Senado de la República",
        img:"https://www.infobae.com/new-resizer/P2OwkreInM1wTsdLbd_X2Imqv1I=/1200x800/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/OQXQQBLYCZH2HICFXA6B632VUU.jpeg",
        textNotice: "Una vez más, la iniciativa de reforma constitucional a la Guardia Nacional (GN) avanzó en las comisiones unidas de Estudios Legislativos Segunda y de Puntos Constitucionales del Senado de la República para ser presentada en el Pleno de la Cámara Alta. Dicha iniciativa promueve que la Sedena continúe a cargo de la GN hasta 2028, pero ahora, se marcaron algunas diferencias para mantener un control civil."
    },
    {
        id:"3",
        title:"Rafael López Aliaga: ¿Qué regidores de Renovación Popular ingresarán a la Municipalidad de Lima?",
        subtitle:"Con la victoria del empresario hotelero, su teniente alcalde será el excongresista Renzo Reggiardo. Además, también entrarían Fabiola Morales, Julio Gago, la hija de la actual parlamentaria Norma Yarrow y el productor de televisión Efraín Aguilar.",
        img:"https://www.infobae.com/new-resizer/rSm5SdByt-n7kV4sJwaM92t35A0=/1200x800/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/6WTZPNEMZZGT5BGXFPZNYNZP2Y.jpg",
        textNotice: "Con la virtual victoria de Rafael López Aliaga como nuevo alcalde de Lima, también se concreta la entrada de su nueva bancada de regidores de Renovación Popular. Hasta el momento, no se tiene una cifra exacta de cuántos serán. Sin embargo, hay una claridad de quienes tendrán un cupo sí o sí en el Concejo Metropolitano a partir del 1 de enero del próximo año. Destacan viejos rostros que antes, incluso, militaron en otras agrupaciones políticas."
    }


];
export const getNotices = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(notices)
        }, 1000)
    })
}