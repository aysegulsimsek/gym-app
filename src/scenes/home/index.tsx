import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import useMediaQuery from '../../hooks/useMediaQuery'
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-10 md:h-full md-pb-0'>
            <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
            >
                <div className='z-10 mt-32 md:basis-3/5'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true ,amount:0.5}}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible:{opacity:1, x:0},
                        }}
                        className='md:-mt-18'>
                        <div className='relative'>
                            <div className='before:absolute before:z-[-1] before:-top-20 before:-left-20 md:before:content-evolvetext'>
                                <img src={HomePageText} alt="HomePageText" className='' />
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequatur quisquam illum fugiat deserunt eveniet quos labore. Necessitatibus facilis natus magnam cupiditate. Reprehenderit, mollitia. Aperiam reiciendis suscipit atque labore facilis!</p>
                    </motion.div>
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true ,amount:0.5}}
                     transition={{delay:0.2, duration: 0.7 }}
                     variants={{
                         hidden: { opacity: 0, x: -100 },
                         visible:{opacity:1, x:0},
                     }}
                        className='mt-8 flex items-center gap-8 md:justify-start'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 duration-300'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true ,amount:0.5}}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible:{opacity:1, x:0},
                }}
                    className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end'>
                    <img src={HomePageGraphic} alt="HomePageGraphic" />
                </motion.div>
            </motion.div>
            {
                isAboveMediumScreens && (
                    <div
                        className='h-[110px] w-full bg-primary-100 py-10 px-10 mt-20'>
                        <div  className="mx-auto w-5/6">
                            <div  className="flex w-full items-center justify-between gap-8">
                                <motion.img initial="hidden"
                    whileInView="visible"
                    viewport={{once:true ,amount:0.5}}
                    transition={{delay:0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible:{opacity:1, y:0},
                    }} src={SponsorRedBull} alt="SponsorRedBull" />
                                <motion.img initial="hidden"
                    whileInView="visible"
                    viewport={{once:true ,amount:0.5}}
                    transition={{delay:0.4, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible:{opacity:1, y:0},
                    }} src={SponsorForbes} alt="SponsorForbes" />
                                <motion.img initial="hidden"
                    whileInView="visible"
                    viewport={{once:true ,amount:0.5}}
                    transition={{delay:0.6, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible:{opacity:1, y:0},
                    }} src={SponsorFortune} alt="SponsorFortune" />
                            </div>
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default Home