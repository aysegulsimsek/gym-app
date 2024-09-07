import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import { benefits } from "@/contants";
import Benefit from "./Benefit";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits"
      className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{once:true ,amount:0.5}}
         transition={{delay:0.5, duration: 0.7 }}
         variants={{
             hidden: { opacity: 0, y: 100 },
             visible:{opacity:1, y:0},
         }}
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>
            MORE THAN JUST A GYM
          </HText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero, consequuntur illum molestias non, corporis officiis sapiente culpa ea, delectus asperiores. Consectetur dignissimos cupiditate facilis rem quo? Laboriosam, ad ea.</p>
        </div>


        {/* Benefits */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true ,amount:0.5}}
        transition={{delay:0.5, duration: 0.7 }}
        variants={{
            hidden: { opacity: 0, y: -100 },
            visible:{opacity:1, y:0},
        }}
          className="mt-5 md:flex items-center justify-between gap-8">
          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits