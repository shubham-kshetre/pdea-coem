import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Mba } from '../../../data/hod';
import { mbaDepartmentData } from '../../../data/department'

const MBA = () => {
  return (
    <DepartmentTemplate 
      cardsData={Mba}
      title={mbaDepartmentData.title} 
      description={mbaDepartmentData.description}
      teachers={mbaDepartmentData.teachers}
      events={mbaDepartmentData.events}
      galleryImages={mbaDepartmentData.galleryImages}
      
      />
  );
};

export default MBA;
