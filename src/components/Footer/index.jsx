import React from "react";
import { Footer , Text , Com , Tetxp , Follow , ICON , Contact , Group , Infomation , Service , Account , Offers , Line , Name , Texts , Cards} from './style'
import Logo from '../../assets/images/1.jpg'
import {FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Union from '../../assets/icons/3.jpg'
import Master from '../../assets/icons/4.jpg'
import Pal from '../../assets/icons/5.jpg'
import Visa from '../../assets/icons/6.jpg'
function App() {
    return (
        <div>
            <Footer>
                <Text>
                    <Com>
                        <Tetxp>
                        <img src={Logo} alt="" />
                        <p>E-Comm</p>
                        </Tetxp>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever.Since the 1500s, when <br /> an unknown printer.</p>
                    </Com>
                    <Follow>
                        <p className="us">Follow Us</p>
                        <p className="titlee">Since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled.</p>
                        <ICON>
                        <FaFacebookF className="iconF"/>
                        <BsTwitter className="iconT"/>
                        </ICON>
                    </Follow>
                    <Contact>
                        <p className="uss">Contact Us</p>
                        <p>E-Comm , 4578 <br /> Marmora Road,<br />lk Glasgow D04 89GR</p>
                    </Contact>
                </Text>
            <Group>
                <Infomation>
                    <p className="aboutt">Infomation</p>
                    <p className="terms">About Us <br /> Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
                </Infomation>
                <Service>
                    <p className="services">Service</p>
                    <p className="terms">About Us <br /> Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
                </Service>
                <Account>
                    <p className="account">My Account</p>
                    <p className="terms">About Us <br /> Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
                </Account>
                <Offers>
                    <p className="offer">Our Offers</p>
                    <p className="terms">About Us <br /> Infomation <br /> Privacy Policy <br /> Terms & Conditions</p>
                </Offers>
            </Group>
            <Line>
            </Line>

            <Name>
                <Texts>
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                </Texts>
            <Cards>
                <img style={{marginTop:'10px'}} width={90} src={Union} alt="" />
                <img style={{marginTop:'7px'}} width={65} height={66} src={Master} alt="" />
                <img style={{marginTop:'13px'}} width={65} height={60} src={Pal} alt="" />
                <img style={{marginTop:'11px'}} width={78} height={61} src={Visa} alt="" />
            </Cards>
            </Name>
          </Footer>
        </div>
    )
}
export default App