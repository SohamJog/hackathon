import Cards from "./Cards";


function CardsItems() {
    const element = <Cards title="Hello World"/>;
    return (
        <div>
            <Cards title="This is a bunch of content"/>
            <Cards title="This is whole bunch of content"/>
        </div>
    );
}

export default CardsItems;