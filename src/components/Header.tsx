interface ContentProps{
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function Header({selectedGenre}:ContentProps){
  return (
    <div className="container">
      
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
    </div>
  )
}