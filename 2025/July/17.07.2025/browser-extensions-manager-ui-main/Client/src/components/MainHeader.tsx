import ExtensionsFilter from "./ExtensionsFilter"

export default function MainHeader () {
    return (
        <section className="flex justify-between items-center">
            <h1 className="text-white text-4xl">Extensions List</h1>
            <ExtensionsFilter />
        </section>
    )
}