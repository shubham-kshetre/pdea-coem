import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Mechanical } from '../../../data/hod';
import { mechDepartmentData } from '../../../data/department'

const MechEngg = () => {
  return (
    <DepartmentTemplate 
      cardsData={Mechanical}
      title={mechDepartmentData.title} 
      description={mechDepartmentData.description}
      teachers={mechDepartmentData.teachers}
      events={mechDepartmentData.events}
      galleryImages={mechDepartmentData.galleryImages}
      
      />
  );
};

export default MechEngg;
