import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { eandtc } from '../../../data/hod';
import { eandtcDepartmentData } from '../../../data/department'

const Eandtc = () => {
  return (
    <DepartmentTemplate 
      cardsData={eandtc}
      title={eandtcDepartmentData.title} 
      description={eandtcDepartmentData.description}
      teachers={eandtcDepartmentData.teachers}
      events={eandtcDepartmentData.events}
      galleryImages={eandtcDepartmentData.galleryImages}
      
      />
  );
};

export default Eandtc;
