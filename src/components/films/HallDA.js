import React, {Component} from 'react'
import './Cinema_hall.css'

const myFilm = {
    films: [
        {
            id: '1',
            title: 'Проклятие Аннабель 3',
            content: 'Преисполнившись решимости удержать Аннабель от дальнейших разрушений и хаоса, демонологи Эд и Лоррейн Уоррены приносят одержимую куклу в запертую комнату артефактов в своем доме, поместив ее под «надежное» освященное стекло и заручившись благословением священника. Однако беспросветная ночь ужаса ждет обитателей дома, когда Аннабель пробуждает злых духов комнаты и их новой мишенью становится десятилетняя дочь Уорренов Джуди и ее друзья.',
            url: 'https://nas.dcp24.ru/img/movie/11185_big.jpg?1558938718',
            image_preview: 'https://nas.dcp24.ru/thumb_hd/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.jpg',
            video: 'https://nas.dcp24.ru/preview/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.mp4',
            price: '1000',
            age: '18+'
        },
    ]
};

class HallDA extends Component {
    state = {
        time: '1 июля в 16:00',
        hall: 'Зал DOLBY ATMOS',
        place: {
            price: 250,
            number_place: '',
        },
        sum: 0,
    }
     onToBook = (e) => {
        const elem = e.currentTarget.id;

        this.setState({
                          place: {
                              number_place: elem
                          },
                  })

        console.log(this.state);
    }
    render() {

        const [film] = myFilm.films;

        return (
            <div className="cinema_hall">
                <div className="container">
                    <div className="row">
                        <div className="col s12 header_hall card-content grey-text text-darken-3">
                            <div className="section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col s10 ">
                                            <h5 className="flow-text center-align">{film.title}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s10">
                                            <div className="center-align">
                                                <span>{this.state.time},</span>
                                                <span>{this.state.hall}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col s10 ">
                                            <div className="hall-legend">
                                                <div className="hall-legend__item">
                                                    <span className="hall-legend__color"></span>
                                                    <span>{this.state.place.price}р</span>
                                                </div>
                                                <div className="hall-legend__item">
                                                    <span
                                                        className="hall-legend__color hall-legend__color--disabled"></span>
                                                    <span>Занято</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="content--hall">
                                                <div className="hall-schema-seats-container">
                                                    <div className="scalable__children-wrapper">
                                                        <div className="hall-schema">
                                                            <div className="hall-schema-row" style={{left: "-50px", top: "0"}}>1</div>
                                                            <div className="hall-schema-row" style={{left: "-50px", top: "50px"}}>2</div>
                                                            <div className="hall-schema-row" style={{left: "-50px", top: "100px"}}>3</div>
                                                            <div className="hall-schema-row" style={{left: "-50px", top: "150px"}}>4</div>
                                                            <div className="hall-schema-row" style={{left: "-50px", top: "200px"}}>5</div>
                                                            {/*1 ряд*/}
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat"  style={{left: "0px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_1" className="hall-schema-seat__place" onClick={this.onToBook}>1</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "50px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_2" className="hall-schema-seat__place" onClick={this.onToBook}>2</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "100px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_3" className="hall-schema-seat__place" onClick={this.onToBook}>3</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "150px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_4" className="hall-schema-seat__place" onClick={this.onToBook}>4</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "200px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_5" className="hall-schema-seat__place" onClick={this.onToBook}>5</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "250px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_6" className="hall-schema-seat__place" onClick={this.onToBook}>6</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "300px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_7" className="hall-schema-seat__place" onClick={this.onToBook}>7</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "350px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_8" className="hall-schema-seat__place" onClick={this.onToBook}>8</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "400px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_9" className="hall-schema-seat__place" onClick={this.onToBook}>9</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "450px", top: "0px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="1_10" className="hall-schema-seat__place" onClick={this.onToBook}>10</div>
                                                                </div>
                                                            </div>
                                                            {/*2 ряд*/}
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "0px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_1" className="hall-schema-seat__place" onClick={this.onToBook}>1</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "50px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_2" className="hall-schema-seat__place" onClick={this.onToBook}>2</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "100px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_3" className="hall-schema-seat__place" onClick={this.onToBook}>3</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "150px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_4" className="hall-schema-seat__place" onClick={this.onToBook}>4</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "200px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_5" className="hall-schema-seat__place" onClick={this.onToBook}>5</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "250px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_6" className="hall-schema-seat__place" onClick={this.onToBook}>6</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "300px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_7" className="hall-schema-seat__place" onClick={this.onToBook}>7</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "350px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_8" className="hall-schema-seat__place" onClick={this.onToBook}>8</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "400px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_9" className="hall-schema-seat__place" onClick={this.onToBook}>9</div>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div
                                                                    className="hall-schema-seat__tooltip hall-schema-seat" style={{left: "450px", top: "50px", height: "36px", width: "36px", backgroundColor: "rgb(164, 206, 54)", zIndex: "9"}}>
                                                                    <div id="2_10" className="hall-schema-seat__place" onClick={this.onToBook}>10</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <div className="col s12 ">
                                    <div className="footer">
                                        <div className="footer-col">
                                            <a className="waves-effect waves-light btn">назад</a>
                                            <div className="hall-schema__sum">
                                                <div className="hall-schema__sum-final">
                                                    <span>Итого: &nbsp;</span>
                                                    <span>{this.state.sum}р</span>
                                                </div>
                                            </div>
                                            <a className="waves-effect waves-light btn">Забронировать место</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HallDA
