import React, { Fragment } from 'react'
import { useEffect, useState } from 'react';
const Header = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);


    console.log(data);
    return (

        <Fragment>

            <header className='max-w-[1440px] mx-auto bg-headerbg bg-cover'>
                <div className='container max-w-[1200px] mx-auto'>
                    <nav className='flex justify-between'>
                        <div className='nav_left '>
                            <div className="logo ">
                                <p className='w-[160px] h-[30px] bg-[#4E9F0D] text-[#FFFFFF] pl-[37px] font-Raleway font-normal text-[20px]  mt-[26px]'>STREET88</p>
                            </div>
                        </div>
                        <div className='nav_right '>
                            <ul className='flex'>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]'><a href="#">Корзина</a></li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]'><a href="#">Меню</a></li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]'><a href="#">О нас</a></li>
                                <li className='w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]'><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main>
                        <h1 className='text-[#4E9F0D] text-[86px] font-black font-Raleway mt-[130px]'>Большой гамбургер</h1>
                        <span className='text-[#4E9F0D] font-Raleway fontnormal text-[36px]'>говядина</span>
                        <p className=' max-w-[1169px] text-[#FFFFFF] text-[18px] font-normal font-Raleway mt-[40px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев</p>
                        <button className=' w-[350px] h-[100px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-thin text-[60px] mt-[65px] mb-[120px]'>14 500</button>
                    </main>
                </div>
            </header>
            <menu className='max-w-[1440px] mx-auto bg-black'>
                <div className='container max-w-[1260px] mx-auto'>
                    <div className='menu_nav'>
                        <ul className='flex gap-[58px] pt-[40px]'>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Гамбургеры</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Хот доги</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Пицца</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Напитки</a></li>
                            <li><a href="#" className='text-[#7A7A7A]  hover:text-[#4E9F0D] font-Raleway text-[20px] font-semibold'>Соки</a></li>
                        </ul>
                    </div>
                    <div className='menu_main mt-[100px] flex justify-between'>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                    </div>
                    <div className='menu_main mt-[100px] flex justify-between'>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                        <div className='box w-[350px]'>
                            <p className='w-[350px] h-[350px] bg-burgerbg'>
                                <h5 className='hidden text-[24px] font-Raleway fond-semibold text-[#FFFFFF] pt-[150px] ml-[67px]'>Добавить в корзину</h5>
                                <button className='w-[190px] h-[60px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-normal text-[24px] mt-[288px]'>14 500</button>
                            </p>
                            <h3 className='text-[#4E9F0D] font-Raleway font-bold text-[24px] mt-[30px]'>C  ГОВЯДИНОЙ</h3>
                            <p className='text-[#FFFFFF] font-Roboto font-normal text-[16px] max-w-[344px] mt-[10px]'>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
                        </div>
                    </div>
                </div>
            </menu>


            <div className='App max-w-[1440px] mx-auto ' >
                <h1>hello</h1>

                {data.map((post) => {
                    return (
                        <div className='border bg-[black] text-[#FFFFFF] pl-[15px]'>
                            <h1>{post.category}</h1>
                            <h2>{post.price}</h2>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>


        </Fragment>

    )
}


export default Header