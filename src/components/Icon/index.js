import Search from '../../assets/icons/search.svg'
import CheckFilled from '../../assets/icons/checkFilled.svg'
import Check from '../../assets/icons/check.svg'
import HomeFilled from '../../assets/icons/homeFilled.svg'
import Home from '../../assets/icons/home.svg'
import PersonFilled from '../../assets/icons/personFilled.svg'
import Person from '../../assets/icons/person.svg'
import EyeOff from '../../assets/icons/eye-off.svg'
import Eye from '../../assets/icons/eye.svg'
import QuestionMark from '../../assets/icons/questionMark.svg'
import Edit from '../../assets/icons/edit.svg'
import Save from '../../assets/icons/save.svg'
import Camera from '../../assets/icons/camera.svg'
import Movie from '../../assets/icons/movie.svg'
import Pencil from '../../assets/icons/pencil.svg'
import None from '../../assets/icons/none.svg'

export default function Icons({ name, filled, color, ...props }) {
  switch (name) {
    case 'search':
      return <Search style={{ color: color }} {...props} />

    case 'check':
      if (filled) return <CheckFilled style={{ color: color }} {...props} />
      else return <Check style={{ color: color }} {...props} />

    case 'home':
      if (filled) return <HomeFilled style={{ color: color }} {...props} />
      else return <Home style={{ color: color }} {...props} />

    case 'person':
      if (filled) return <PersonFilled style={{ color: color }} {...props} />
      else return <Person style={{ color: color }} {...props} />

    case 'eye-off':
      return <EyeOff style={{ color: color }} {...props} />

    case 'eye':
      return <Eye style={{ color: color }} {...props} />

    case 'camera':
      return <Camera style={{ color: color }} {...props} />

    case 'edit':
      return <Edit style={{ color: color }} {...props} />

    case 'save':
      return <Save style={{ color: color }} {...props} />

    case 'pencil':
      return <Pencil style={{ color: color }} {...props} />

    case 'movie':
      return <Movie style={{ color: color }} {...props} />

    case 'none':
      return <None />

    default:
      return <QuestionMark style={{ color: color }} {...props} />
  }
}
