import { useRouter } from 'next/router';
import React from 'react';

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

export function useForm() {
    const router = useRouter();
    const [error, setError] = React.useState<string | null>(null);
    const [disabled, setDisabled] = React.useState(false);

    const clearError = () => setError(null);

    const handleSubmit = async (event: React.FormEvent<UsernameFormElement>) => {
        event.preventDefault();

        setDisabled(true);

        const data = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };

        try {
            const response = await fetch('api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await response.json();

            if (response.ok) {
                router.push('/success');
            } else {
                setError(json.error);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Unknown error');
        } finally {
            setDisabled(false);
        }
    };

    return { clearError, disabled, error, handleSubmit };
}
