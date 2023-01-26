import { BsLink } from "react-icons/bs"
import { BsBriefcase } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { SiMarketo } from "react-icons/si"
import { AiFillSetting } from "react-icons/ai"
import styles from './Sidebar.module.css'
// import styles from '../../../styles/variables.module.css'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className={styles.body}>
            <section className={styles.section1}>
                    <Option icon={<BsLink className={styles.img} />} text={'rest1'} />
                    <Option icon={<BsBriefcase className={styles.img} />} text={'rest2'} />
                    <Option icon={<CgProfile className={styles.img} />} text={'rest3'} />
                    <Option icon={<SiMarketo className={styles.img} />} text={'rest4'} />
                    <Option icon={<AiFillSetting className={styles.img} />} text={'rest5'} />
            </section>
        </div>
    )
}

const Option = ({ icon, text }) => (
    <Link className={styles.link} href="#">
        <div>
            {icon}
            <h5>{text}</h5>
        </div>
    </Link>
)

