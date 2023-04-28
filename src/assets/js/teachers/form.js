// Encargado de todas las operaciones que se hagan en el formulario (interacción y configuración)

/**
 * Este objeto contiene las referencias a los elementos clave del formulario
 */
export const formElements = {
    form: document.getElementById('teacherForm'),
    containerId: document.getElementById('containerId'),
    fields: {
        id: document.getElementById('txtId'),
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('txtBirthDate'),
    },
    buttons: {
        btnSubmit: document.getElementById('btnSubmit'),
        btnCancel: document.getElementById('btnCancel'),
    }
};

/**
 * Array de objectos que contiene información para las validaciones
 * Cada objeto contiene una referencia a cada campo, un Array de objetos
 * de validaciones que tendrá, el ID del error, el mensaje y la función de validación
 */
export const fieldConfigurations = [
    {
        input: formElements.fields.name,
        validations: [
            {
                errorId: `${formElements.fields.name.id}Required `,
                errorMessage: 'El nombre es obligatorio.',
                // Las validaciones retornaran un False cuando deben mostrar el mensaje de error
                // y un False cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]
    },
    {
        input: formElements.fields.description,
        validations: [
            {
                errorId: `${formElements.fields.description.id}Required `,
                errorMessage: 'La descripción es obligatoria',
                // Las validaciones retornaran un False cuando deben mostrar el mensaje de error
                // y un False cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]
    },
    {
        input: formElements.fields.email,
        validations: [
            {
                errorId: `${formElements.fields.email.id}Required `,
                errorMessage: 'El correo electrónico obligatorio.',
                // Las validaciones retornaran un False cuando deben mostrar el mensaje de error
                // y un False cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            },
            {
                errorId: `${formElements.fields.email.id}Pattern`, //Template literals
                errorMessage: "El correo electrónico no cumple con el formato correcto.",
                validationFunction: (value) => {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                }
            }
        ]
    },
    {
        input: formElements.fields.birthDate,
        validations: [
            {
                errorId: `${formElements.fields.birthDate.id}Required `,
                errorMessage: 'La fecha de nacimiento es obligatoria.',
                // Las validaciones retornaran un False cuando deben mostrar el mensaje de error
                // y un False cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]
    }
];

export function getFormData() {
    /**
     * const formData = new FormData(formElements.form);
     * return Object.fromEntries(formData.entries());
     */
    const teacher = {
        id: formElements.fields.id.value.trim() ? parseInt(formElements.fields.id.value.trim() ): new Date().getTime(),
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
}

export function resetForm() {
    formElements.form.reset();
    hideIdAndChangeElementForNew();
}

export function setFormData(teacher) {
    const { id, name, description, email, birthDate } = teacher;
    formElements.fields.id.value = id;
    formElements.fields.name.value = name;
    formElements.fields.description.value = description;
    formElements.fields.email.value = email;
    formElements.fields.birthDate.value = birthDate;
    showIdAndChangeElementForEdit();
}

function showIdAndChangeElementForEdit() {
    formElements.containerId.classList.replace('d-none', 'd-block');
    formElements.buttons.btnSubmit.classList.replace('btn-success', 'btn-primary');
    formElements.buttons.btnSubmit.textContent = "Guardar";
}

function hideIdAndChangeElementForNew() {
    formElements.containerId.classList.replace('d-block', 'd-none');
    formElements.buttons.btnSubmit.classList.replace('btn-primary', 'btn-success');
    formElements.buttons.btnSubmit.textContent = "Enviar";
}