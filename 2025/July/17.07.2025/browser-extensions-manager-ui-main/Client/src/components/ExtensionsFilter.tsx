import Button from "./Button"

export default function ExtensionsFilter () {
    return (
        <div className="flex gap-3">
            <Button 
                variant="outline"
                onClick={() => alert('CardButton')}
                size="l"
                title="All"
            />
            <Button 
                variant="outline"
                onClick={() => alert('CardButton')}
                size="l"
                title="Active"
            />
            <Button 
                variant="outline"
                onClick={() => alert('CardButton')}
                size="l"
                title="Incative"
            />
        </div>
    )
}