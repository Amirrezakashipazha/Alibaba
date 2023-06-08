import React from 'react'
import ItemsAccountDashboard from '../ItemsAccount/ItemsAccount'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'
import { Link } from 'react-router-dom'
import { LeftArrow, Logo, QuestionSign } from '../icons/Icons'
import Footer from '../Footer/Footer'
const Loyalty = () => {
    return (
        <div className='Loyalty'>
            <div className='headerLoyalty'>
                <DesktopHeader />
            </div>
            <div className='mainLoyalty'>
                <div >
                    <ItemsAccountDashboard id={6} />
                </div>
                <div className='bodyLoyalty'>
                    <div className='status'>
                        <div className='top'>
                            <svg viewBox="0 0 24 24" width="1.3rem" height="1.3rem" fill="currentColor" class="ml-2"><path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5ZM6.011 9.159v7.19a12.226 12.226 0 0 0 6.225 1.691c3.354 0 5.764-1.328 5.764-1.328-.784-1.702-1.96-3.035-3.31-4.07a9.836 9.836 0 0 0-.707-.513 12.934 12.934 0 0 0-.737-.465c-2.493-1.46-5.287-2.148-7.235-2.505Zm5.972-3.2c-2.21 0-4.264.455-5.983 1.033v.515c.233.04.47.078.7.124 2.885.582 5.308 1.47 7.25 2.664.243.153.483.307.71.466 2.08-1.822 2.886-3.738 2.886-3.738a14.725 14.725 0 0 0-5.563-1.063Z" fill-rule="evenodd"></path></svg>
                            <h4>وضعیت کلی امتیازهای کاربر</h4>
                        </div>
                        <div className='buttonStatus'>
                            <div className='Point'>
                                <div className='TopPoint'>
                                    <div className='room'>
                                        <div className='zero'>
                                            <img src='https://www.alibaba.ir/assets/loyalty-gradient-fff0ccbb.svg' alt='' />
                                            <h3>0</h3>
                                            <h5>امتیاز</h5>
                                        </div>
                                        <div className='BlueRoom'>
                                            <h5>اتاق آبی</h5>
                                        </div>
                                    </div>
                                    <div className='progress'></div>
                                    <div className='only'>
                                        <h5>تنها 65000 امتیاز تا اتاق بعدی</h5>
                                        <Link to={'/Account/CustomerClub'} className='details'>
                                            <h6> جزئیات امتیاز‌ها </h6>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='left'>
                                <img src='https://www.alibaba.ir/assets/hourglass-2c4d5cb0.svg' />
                                <div className='text'>
                                    <div className='day'>
                                        <h4>0</h4>
                                        <h6>روز</h6>
                                    </div>
                                    <h5>باقی‌مانده تا اتمام امکان استفاده از امکانات اتاق فعلی شما</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={''} className='aboutAlibaba'>
                        <div className='right'>
                            <svg viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor" aria-hidden="true" class="flex-[0_0_auto]"><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z" fill-rule="evenodd"></path></svg>
                            <div className='content'>
                                <p>درباره باشگاه همسفران علی‌بابا</p>
                                <h5>باشگاه همسفران علی‌بابا از تاریخ 20 مهرماه 1401 در اختیار همه‌ی همسفران علی‌بابا قرار گرفت، برای آشنایی بیشتر با امکانات و خدمات این باشگاه و همچنین آشنایی با نحوه جمع‌آوری و محاسبه امتیازات در هر اتاق، می‌توانید این قسمت را مطالعه کنید</h5>
                            </div>
                        </div>
                        <div className='left'>
                            <LeftArrow />
                        </div>
                    </Link>
                    <h4 style={{ fontWeight: 900 }}> خدمات و امکانات ویژه‌ی شما در اتاق آبی</h4>
                    <Link className='sale'>
                        <div className='Discount'>
                            <div className='right'>
                                <svg viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor" aria-hidden="true" class="flex-[0_0_auto]"><path d="m12.001 1.5.17.005a2.86 2.86 0 0 1 2.13 1.16l.515.69c.3.41.802.618 1.3.54l.848-.135a2.88 2.88 0 0 1 3.275 3.276l-.128.843a1.36 1.36 0 0 0 .548 1.31l.679.506a2.865 2.865 0 0 1 .004 4.61l-.69.515c-.41.299-.619.802-.54 1.306l.127.842a2.88 2.88 0 0 1-3.276 3.275l-.832-.126a1.359 1.359 0 0 0-1.283.538l-.507.679a2.865 2.865 0 0 1-4.61.004l-.514-.69c-.3-.41-.803-.618-1.305-.54l-.88.135a2.88 2.88 0 0 1-3.276-3.277l.126-.832a1.359 1.359 0 0 0-.538-1.282l-.679-.507a2.865 2.865 0 0 1-.004-4.61l.69-.514c.41-.3.618-.803.54-1.306l-.135-.88A2.88 2.88 0 0 1 7.033 3.76l.842.128a1.36 1.36 0 0 0 1.31-.548l.507-.68a2.865 2.865 0 0 1 2.31-1.16Zm3.527 6.971a.75.75 0 0 0-1.06 0l-6 6-.063.07a.75.75 0 0 0 1.123.99l6-6 .062-.07a.75.75 0 0 0-.062-.99Zm0 5.25a.75.75 0 0 0-1.06 0l-.75.75-.063.07a.75.75 0 0 0 1.123.99l.75-.75.062-.07a.75.75 0 0 0-.062-.99Zm-5.25-5.25a.75.75 0 0 0-1.06 0l-.75.75-.063.07a.75.75 0 0 0 1.123.99l.75-.75.062-.07a.75.75 0 0 0-.062-.99Z"></path></svg>
                                <div className='content'>
                                    <p>تخفیف‌های شگفتانه</p>
                                    <h5>تا ۵ درصد تخفیف شگفتانه در اتاق آبی</h5>
                                </div>
                            </div>
                            <div className='left'>
                                <LeftArrow />
                            </div>
                        </div>
                        <div className='moment'>
                            <div className='right'>
                                <svg viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor" aria-hidden="true" class="flex-[0_0_auto]"><path d="m20.53 11.4-1.03-.193V9.608c0-4.057-3.364-7.358-7.5-7.358S4.5 5.551 4.5 9.608v1.599l-1.031.192a1.48 1.48 0 0 0-1.219 1.447v.884c0 .705.513 1.313 1.219 1.446l1.62.302 2.048.502a1.527 1.527 0 0 0 1.286-.267c.367-.281.577-.704.577-1.16v-3.266c0-.457-.21-.88-.578-1.161a1.511 1.511 0 0 0-1.285-.267L6 10.137v-.529c0-3.246 2.692-5.886 6-5.886s6 2.64 6 5.886v.53l-1.136-.279a1.516 1.516 0 0 0-1.287.267A1.453 1.453 0 0 0 15 11.287v3.265c0 .457.21.88.577 1.16a1.511 1.511 0 0 0 1.286.268L18 15.702v.529c0 1.623-1.346 2.944-3 2.944h-.159a1.876 1.876 0 0 0-1.716-1.104h-2.25c-1.034 0-1.875.825-1.875 1.84 0 1.014.84 1.84 1.875 1.84h2.25c.767 0 1.426-.456 1.716-1.105H15c2.482 0 4.5-1.98 4.5-4.415v-.863l1.031-.192a1.482 1.482 0 0 0 1.219-1.446v-.885a1.48 1.48 0 0 0-1.22-1.446Z"></path></svg>
                                <div className='content'>
                                    <p>در لحظات مهم در اولویت هستید</p>
                                    <h5>اولویت در صف تماس و پاسخگویی آنلاین در صورت نزدیک‌بودن زمان حرکت</h5>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className='Fellow'>
                        <svg viewBox="0 0 24 24" width="2em" height="2em" fill="currentColor" aria-hidden="true" class="flex-[0_0_auto]"><path d="m20.53 11.4-1.03-.193V9.608c0-4.057-3.364-7.358-7.5-7.358S4.5 5.551 4.5 9.608v1.599l-1.031.192a1.48 1.48 0 0 0-1.219 1.447v.884c0 .705.513 1.313 1.219 1.446l1.62.302 2.048.502a1.527 1.527 0 0 0 1.286-.267c.367-.281.577-.704.577-1.16v-3.266c0-.457-.21-.88-.578-1.161a1.511 1.511 0 0 0-1.285-.267L6 10.137v-.529c0-3.246 2.692-5.886 6-5.886s6 2.64 6 5.886v.53l-1.136-.279a1.516 1.516 0 0 0-1.287.267A1.453 1.453 0 0 0 15 11.287v3.265c0 .457.21.88.577 1.16a1.511 1.511 0 0 0 1.286.268L18 15.702v.529c0 1.623-1.346 2.944-3 2.944h-.159a1.876 1.876 0 0 0-1.716-1.104h-2.25c-1.034 0-1.875.825-1.875 1.84 0 1.014.84 1.84 1.875 1.84h2.25c.767 0 1.426-.456 1.716-1.105H15c2.482 0 4.5-1.98 4.5-4.415v-.863l1.031-.192a1.482 1.482 0 0 0 1.219-1.446v-.885a1.48 1.48 0 0 0-1.22-1.446Z"></path></svg>
                        <div>
                            <p>همسفر ماندگار روزگار می‌شوید</p>
                            <h5>اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار و پروژه‌های احیای محیط زیست</h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='footer' style={{ backgroundColor: 'white' }}>
                <Footer />
            </div>
        </div>
    )
}

export default Loyalty