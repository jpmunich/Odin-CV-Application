import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // package that generate unique keys
import EducationInformationFormUnit from './EducationInformationFormUnit';
import EducationInformationResumeSection from './EducationInformationResumeSection';
import chevronUp from '../../assets/chevrons/chevron-up.svg';
import chevronDown from '../../assets/chevrons/chevron-down.svg';
    
function EducationInformationForm({ 
        onSave, 
        onDelete, 
        createEduUnit, 
        inputValues, 
        onUpdateInputValues, 
        isEducationUnitSelected,
        toggleIsEducationUnitSelected,
        eduSave,
        eduSaves
    }) {
    
    const [isFormOpen, setisFormOpen] = useState(true)

    const toggleActive = () => setisFormOpen(!isFormOpen)

    if (isFormOpen && isEducationUnitSelected) {
        return (
            <EducationInformationFormUnit 
                onSave={onSave}
                eduSave={eduSave}
                onDelete={onDelete}
                onCancel={toggleIsEducationUnitSelected}
                onToggleActive={toggleActive}
                inputValues={inputValues}
                onUpdateInputValues={onUpdateInputValues}
            />
        );
    } else if (isFormOpen && !isEducationUnitSelected) {
        return (
            <div className='education-information-form-container'>
                <div onClick={toggleActive} className="education-information-header-container">
                    <h3>Education Form</h3>
                    <img src={chevronDown} alt="chevron" />
                </div>
                <div>{eduSaves}</div>
                <div className='add-education-section-button-container'>
                    <button onClick={() => {toggleIsEducationUnitSelected(), createEduUnit()}} className='add-education-section-button'>Add +</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className='education-information-form-container'>
                <div onClick={toggleActive} className="education-information-header-container">
                    <h3>Education Form</h3>
                    <img src={chevronUp} alt="chevron" />
                </div>
            </div>
        );
    }
}

export default EducationInformationForm;