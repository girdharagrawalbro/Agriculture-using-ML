import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
    return (
        <nav className="py-2 px-4 position-fixed top+-0 start-0 w-100 header text-white">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/f341/2370/e9124225a06343d19fa22c9ccd0d84b8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJyxPtPs3xMfe~p8G~AkLprq0mmA16CwkXvUxjrrZUyqJWoH5DtomvGA4JfY6wA11OSwh9~FuUGm9pfnOpHmZ8ueV15LzkZRdhjrHZp97Ja4R9wQBiji1s~l57HAX9VO3yiyeXQfblOvImoYfCAUaEkAI7jshdD0UkwlPJHod2LfcuGO3UiYIE8siHPicaF74EFWDhMLmO6LQt1c--c1q6nKlsIeYaYl2iPryw7josgnG9l95p2c-nAq3J3gi4lWILbRrPiGQeO7gjj4maquORbIUTm52wXxTMmxg7pAJWAOzW-ObFpo9FEl33SQtmdOHpT9ZSGM-8hnKPWOUxaNwQ__"
                        className="" width="80px" alt="" />
                </div>
                <div>
                    <ul className="d-flex gap-2 align-items-center">
                        <Link to="/"><li className='btn text-white'>Home</li></Link>
                        <Link to="/about"><li className='btn text-white'>About</li></Link>
                        <Link to="/contact"><li className="btn text-white contact">Contact Us</li></Link>
                        <Link to="/crop"><li className='btn text-white'>Crop Recomandation</li></Link>
                        <Link to="/fertilizer"><li className='btn text-white'>Fertilizer Recomandation</li></Link>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header