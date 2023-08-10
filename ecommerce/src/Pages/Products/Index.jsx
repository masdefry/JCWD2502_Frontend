import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { Carousel } from "flowbite-react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { addToCartAsync } from "../../Redux/Features/Cart/Index";
import { useDispatch } from "react-redux";

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();  
    const [selected, setSelected] = useState({})
    const qty = useRef()
    const dispatch = useDispatch()

    const onFetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/products/${id}`);
            console.log(res);
            const totalStock = res.data.stocks.reduce((a, b) => {
                return a + b
            })
      
            setSelected({...selected, stockSize: totalStock})
            setProduct(res.data);
        } catch (error) {}
    };

    useEffect(() => {
        onFetchData();
    }, []);

    return (
        <>
            {!product ? null : (
                <div className="flex justify-center h-[700px] gap-[50px] my-[80px]">
                    <Carousel className="w-[550px] h-[650px]">
                        <img src={product.images[0]} alt="" />
                        <img src={product.images[1]} alt="" />
                    </Carousel>
                    <div className="w-[550px] flex flex-col gap-[20px]">
                        <div className="ff-jost-bold text-2xl">
                            {product.name}
                        </div>
                        <div className="ff-jost-bold text-xl">
                            {product.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })}
                            <span className="text-xs ml-3">
                            {selected.stockSize} Available
                            </span>
                        </div>
                        <div className="ff-jost-mid">Ukuran : {selected.size}</div>
                        <div className="flex ">
                            {product.size.map((v, index) => {
                                return (
                                    <span onClick={() => setSelected({...selected, stockSize: product.stocks[index], size: v})} className="ff-jost-mid flex items-center justify-center border text-center border-black w-[40px] h-[40px] rounded-full mx-[5px]">
                                        {v}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="flex items-end gap-[20px]">
                            <div>
                                <div className="ff-jost-mid mb-[10px]">
                                    Quantity:
                                </div>
                                <input
                                    className="border border-gray-400 h-[48px] w-[114px] ff-jost rounded-sm"
                                    type="number"
                                    min={1}
                                    max={selected.stockSize}
                                    defaultValue={1}
                                    ref={qty}
                                />
                            </div>
                            <button disabled={selected.size? false : true} onClick={() => dispatch(addToCartAsync({productId: Number(id), userId: Number(localStorage.getItem('idLogin')), quantity: Number(qty.current.value), size: selected.size }))} className="ff-jost-bold border bg-black border-black w-[333px] h-[48px] hover:bg-white text-white hover:text-black">
                                ADD TO CART
                            </button>
                        </div>
                        <div>
                            <span>
                                <input type="checkbox" name="" id="" />
                            </span>
                            <a href="/" className="ff-jost text-black">
                                {" "}
                                I agree with the{" "}
                            </a>
                            <a
                                href="/"
                                className="ff-jost text-black underline"
                            >
                                Terms & conditions
                            </a>
                        </div>
                        <button className="ff-jost-bold border hover:bg-black border-black w-[475px] h-[48px] bg-white hover:text-white text-black">
                            BUY IT NOW
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}