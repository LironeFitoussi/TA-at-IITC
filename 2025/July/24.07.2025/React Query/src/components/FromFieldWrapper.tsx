import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from './ui/form';
import { Input } from './ui/input';

interface FormFieldWrapperProps {
    control: any;
    name: string;
    label: string;
    description?: string;
    type?: string;
    placeholder?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export function FormFieldWrapper({
    control,
    name,
    label,
    description,
    type = "text",
    placeholder,
    inputProps = {}
}: FormFieldWrapperProps) {
    return (
        <FormField
        control={control}
        name={name}
        
        render={({ field }) => (
            <FormItem className="mb-8">
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input 
                        type={type}
                        placeholder={placeholder} 
                        {...field} 
                        {...inputProps}
                    />
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>} 
                <FormMessage />
            </FormItem>
        )}
    />
    )
}