import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { benefits } from "@/contants";
import Benefit from "./Benefit";
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits"
      className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <motion.div className="md:my-5 md:w-3/5"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}
        >
          <HText>
            MORE THAN JUST A GYM
          </HText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero, consequuntur illum molestias non, corporis officiis sapiente culpa ea, delectus asperiores. Consectetur dignissimos cupiditate facilis rem quo? Laboriosam, ad ea.</p>
        </motion.div>


        {/* Benefits */}
        <motion.div
           className="mt-5 items-center justify-between gap-8 md:flex"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphic and Description */}

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay:0.2,duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 },
           }}
          className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* graphic */}
          <img className='mx-auto' src={BenefitsPageGraphic} alt="" />
          {/* desc */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTİNG {""}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            <div>
              <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil eveniet voluptate! Laudantium quas corporis accusantium sed quod natus possimus exercitationem, ipsa aut iure, nulla saepe voluptas provident a non.
              </p>
              <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cupiditate rem nam repellat repudiandae molestias optio cumque animi sequi corrupti, amet laudantium et delectus iusto! Alias cumque assumenda deserunt adipisci?</p>
            </div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>

        </motion.div>
      </motion.div>

    </section>
  )
}

export default Benefits