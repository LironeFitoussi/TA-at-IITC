// import ButtonsWrapper from "./components/ButtonsWrapper"
// import UserInput from "@/components/UserInput"
// import ProductCardWrapper from '@/components/ProductCardWrapper'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import UsersTable from './components/UsersTable';
function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Fairy" },
    { id: 6, name: "Meowth", type: "Normal" },
    { id: 7, name: "Psyduck", type: "Water" },
    { id: 8, name: "Machop", type: "Fighting" },
    { id: 9, name: "Geodude", type: "Rock" },
    { id: 10, name: "Gastly", type: "Ghost" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 
        <ButtonsWrapper />
        <UserInput /> 
        <ProductCardWrapper /> 
      */}
    
        {/* <Card className='p-4 m-4'>

          <CardHeader>
            <CardTitle>
              Pokedex
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pokemons.map((pokemon) => {
                return (
                  <TableRow>
                    <TableCell className='font-bold'>{pokemon.id}</TableCell>
                    <TableCell>{pokemon.name}</TableCell>
                    <TableCell>{pokemon.type}</TableCell>
                    <TableCell className='flex gap-4 items-center justify-center'>
                      <Button>
                        Feed
                      </Button>
                      <Button variant="destructive" size="sm">
                        Release
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          </CardContent>
        </Card> */}

        <UsersTable />
    </div>
  )
}

export default App
