import RejoindreBg from '../static/img/rejoindre.webp';

import { MdOutlinePhotoCamera } from 'react-icons/md';

import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';
import SubSection from '../components/SubSection';
import ScrollTop from '../components/ScrollTop';

function Photos() {
    return (
        
        <Section
            id='Photos'
            bg={RejoindreBg}
        >
            

            {/* CONSEILS CONTENT */}
            <SectionHeader sectionTitle='NOS PHOTOS'>
                <MdOutlinePhotoCamera className="icon"/>
            </SectionHeader>
            <SubSection>
                <div className='flex flex-col  items-center md:items-start'>
                    <p className='mb-8'> Quelques exemples photos de nos sorties en groupe ! 
                    </p>
                </div>
                
            </SubSection>
            <ScrollTop/>

        </Section>
        
    );
}

export default Photos;
