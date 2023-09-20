import './services.scss'

const pricelist = [
    {
        service: "Услуга № 1",
        price: 0,
    },
    {
        service: "Услуга № 2",
        price: 1,
    },
    {
        service: "Услуга № 3",
        price: 2,
    },
    {
        service: "Услуга № 4",
        price: 3,
    },
    {
        service: "Услуга № 5",
        price: 4,
    },
    {
        service: "Услуга № 6",
        price: 5,
    },
    {
        service: "Услуга № 7",
        price: 6,
    },
];

function Services() {


    return (<section className='services'>
        <div className='services__container'> 
        {pricelist.map((item, index) => {
            return (
                <div className='services__block' key={index}>
                    <div className=''>{item.service}</div>
                    <div className=''>{item.price}</div>
                </div>
            )
        })}
    </div>
    </section>
    );
}

export default Services;

