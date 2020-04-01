export default {
  container: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    margin: 20
  },
  details: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  img: {
    flex: 1,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  date: {
    fontSize: 12
  },
  overview: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  genresContainer: {
    display: 'flex'
  },
  genre: {
    fontSize: 12,
    marginLeft: 5
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  runtime: {
    fontSize: 12
  }
}