export interface Props{
    prodBuy:{
        name:string;
        image:string;
        id:number;
    }
}


// function ProductBuy({ prodBuy }: Props) {
function ProductBuy(){
    
    // const { name, image, id } = prodBuy;
    return (
        <div>
            {/* <p>{name}</p> */}
            <p>name</p>

        </div>
    )

}

export default ProductBuy;