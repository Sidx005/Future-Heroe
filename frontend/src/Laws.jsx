import React from 'react'
import './Laws.css'
import Lady from './Law.png'
import Navbar from './Navbar'
import Footer from './Footer'
const Laws = () => {
    const Countries = [
        {
            id: 1,
            country: "India",
            law1: "https://www.indiacode.nic.in/bitstream/123456789/2148/1/a2016-2.pdf",
            law2: "https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/RTE_Section_wise_rationale_rev_0.pdf",
            law3: "https://www.indiacode.nic.in/bitstream/123456789/15943/1/the_prohibition_of_child_marriage_act%2C_2006.pdf",
            law4: "https://labour.gov.in/sites/default/files/WorkingGroup12th_plan_on_Child_Labour.pdf",
            law1description:
                "The Juvenile Justice (Care and Protection of Children) Act, 2015, is a key legislation in India aimed at protecting the rights of children in conflict with the law and those in need of care and protection. The Act establishes Juvenile Justice Boards (JJBs) for handling cases involving young offenders and Child Welfare Committees (CWCs) for ensuring the welfare of vulnerable children. It emphasizes rehabilitation, social reintegration, and child-friendly procedures. The Act also includes provisions for handling heinous offenses committed by children aged 16-18, allowing for a preliminary assessment to determine the appropriate legal process. The accompanying Model Rules, 2016, provide detailed guidelines for implementing the Act.",
            law2description:
                "The Right of Children to Free and Compulsory Education Act, 2009, commonly known as the RTE Act, is a landmark legislation in India that guarantees free and compulsory education to all children aged 6 to 14 years. The Act mandates that every child has the right to full-time elementary education of satisfactory and equitable quality in a formal school that satisfies certain essential norms and standards. It outlines responsibilities for the government and parents, sets minimum norms for schools, and prohibits unrecognized schools from operating. The Act also emphasizes the inclusion of marginalized communities, ensuring no child is denied education due to economic or social disadvantage. Additionally, the Act promotes child-friendly and child-centered education, aiming to improve enrollment and retention rates while reducing dropout rates.",
            law3description:
                "The Prohibition of Child Marriage Act, 2006 aims to prevent child marriages in India. It defines a child as a male under 21 or a female under 18. The Act makes child marriages voidable, ensures maintenance and custody for affected children, and legitimizes children born from such marriages. It imposes severe penalties on those who conduct or promote child marriages and empowers courts to issue injunctions to stop them. The Act also mandates the appointment of Child Marriage Prohibition Officers to enforce the law and raise awareness.",
            law4description:
                "The Child Labour (Prohibition and Regulation) Act, 1986, is a key piece of legislation in India aimed at eliminating child labor and protecting children from exploitation. The Act prohibits the employment of children below the age of 14 in hazardous occupations and processes. It also regulates the working conditions of children in non-hazardous occupations, setting limits on working hours and ensuring safe and healthy working environments. In 2016, the Act was amended to further prohibit the employment of children below 14 years in any form of work, except in family businesses and entertainment industries under certain conditions. Additionally, the amendment introduced stricter penalties for violations and expanded the definition of hazardous occupations. The law works in conjunction with the Right to Education Act, 2009, which mandates free and compulsory education for children aged 6 to 14, aiming to reduce child labor by promoting education.",
        },
        {
            id: 2,
            country: "US",
            law1: "https://www.acf.hhs.gov/sites/default/files/documents/cb/capta.pdf",
            law2: "https://www.acf.hhs.gov/sites/default/files/documents/cb/capta.pdf",
            law3: "https://www.un.org/development/desa/disabilities/wp-content/uploads/sites/15/2019/11/United-States_Individuals-with-Disabilities-Education-Act.pdf",
            law4: "https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/media/document/JJDPA-of-1974-as-Amended-12-21-18.pdf",
            law1description:
                "The Child Abuse Prevention and Treatment Act (CAPTA) is a key federal legislation in the United States aimed at addressing child abuse and neglect. Enacted in 1974, CAPTA provides funding to states for prevention, assessment, investigation, and treatment activities, as well as grants for research and training. The act establishes a framework for improving child protective services (CPS) and mandates the creation of the National Center on Child Abuse and Neglect (NCCAN). CAPTA also sets forth a minimum definition of child abuse and neglect and outlines requirements for state laws on the reporting of suspected abuse and neglect cases.",
            law2description: "The Individuals with Disabilities Education Act (IDEA) amendments aim to enhance educational access and equity for students with disabilities. Key changes include updated provisions for early intervention services, increased parental involvement in educational planning, and improved transition support for students entering adulthood. The amendments also address disciplinary measures, ensuring fair treatment and appropriate educational placements. These changes strive to uphold the rights of students with disabilities, promoting their academic and social development.",
            law3description: "The Disability Education Act (IDEA) in the United States is a federal law ensuring that children with disabilities receive a free and appropriate public education tailored to their individual needs. Enacted in 1975 and amended several times since, IDEA mandates special education and related services for eligible students from birth to age 21. It emphasizes the importance of individualized education plans (IEPs), early intervention, and inclusion in the least restrictive environment possible. Additionally, IDEA provides support to states and local education agencies to meet the unique educational needs of students with disabilities.",
            law4description: "The Juvenile Justice and Delinquency Prevention Act of 1974 is a landmark piece of legislation in the United States aimed at addressing juvenile delinquency and improving the juvenile justice system. It establishes core protections for young people involved in the justice system, such as removing juveniles from adult jails and promoting community-based alternatives to incarceration. The act also funds programs for delinquency prevention and rehabilitation efforts, emphasizing the importance of education, counseling, and family support in addressing juvenile delinquency.",
        }
    ];
    return (
        <div>
            <Navbar />
            <header>
                <h1 className="heading text-4xl">
                    We did the research for you,so that you don't have to!!!
                </h1>
                <div className="img">
                    <img src={Lady} alt="" />
                </div>
            </header>
            <div className="Laws ">
                {Countries.map((list) => (
                    <div className="Country" key={list.id}>
                        <h1 className='font-bold'>{list.country}</h1>
                        <div className="cards  ">
                            <div className="lawCard">{list.law1description.slice(0,510)+"..."}
                                <div className="buttons ">
                                <a href={list.law1} download={list.law1}>
                                <button>Download pdf </button>
                                </a>
                                <button><a href="https://mediafiles.botpress.cloud/0185259c-8182-4c83-8afc-39725dd4ea62/webchat/bot.html">
                                    Summary
                                </a></button>
                                </div>

                            </div>
                            <div className="lawCard">{list.law2description.slice(0,510)+"..."}
                                <div className="buttons">
                               
                                    <button download={list.law1} className='flex justify-center items-center text-center'>Download pdf </button>
                            
                                <button><a href="https://mediafiles.botpress.cloud/0185259c-8182-4c83-8afc-39725dd4ea62/webchat/bot.html">
                                    Summary
                                </a></button>
                                </div>
                            </div>
                            <div className="lawCard">{list.law3description.slice(0,510)+"..."}
                                <div className="buttons">
                                <a href={list.law3} download>
                                    <button className='flex justify-center items-center text-center'>Download pdf </button>
                                </a>
                                <button><a href="https://mediafiles.botpress.cloud/0185259c-8182-4c83-8afc-39725dd4ea62/webchat/bot.html">
                                    Summary
                                </a></button>
                                </div>

                            </div>
                            <div className="lawCard">{list.law4description.slice(0,510)+"..."}
                                <div className="buttons">
                                <a href={list.law4} download>
                                    <button className='flex justify-center items-center text-center'>Download pdf </button>
                                </a>
                                <button><a href="https://mediafiles.botpress.cloud/0185259c-8182-4c83-8afc-39725dd4ea62/webchat/bot.html">
                                    Summary
                                </a></button>
                                </div>
                                

                            </div>
                        </div>
                     
                        
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Laws