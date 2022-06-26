'use strict';

var data = { "Asses": "Үнэлэх", "Liability" : "Өр төлбөр" , "Proprietor" : "Эзэмшигч" , "Hazardous" :"Аюултай","Safeguard" : "Хамгаалах",
"Jointly" : "Хамтран" ,"Compensate" : "Нөхөн олгох", "Industrious" : "Хөдөлмөрч" ,"Ancestral" : "Эртний", "Cohesion" : "Уялдаа холбоо" ,
"Descendant" : "Үр удам", "Antipathy" : "Дургуйцал" , "Context": "Хам сэдэв", "subtly":"Үл мэдэг" , "Contest": "Өрсөлдөх",
"Authority" : "Эрх мэдэл","Election" : "Сонгууль" ,"bitterly" : "Догшин", "candidate" : "Нэр дэвшигч", "Policy" : "Бодлого",
"Coalition" : "Эсвэл/нэгдэл", "Merchant" : "Худалдаачин","Entrepreneurial" : "Бизнес сэтгэлгээтэй", "proportionately" : "Харьцангуй", "Extract": "Хөрвүүлэх",
"Prototype" : "Туршилтын загвар", "Haggle": "Үнэ хялцах","Reward" : "Шагнал", "Intrepid" : "Эрэлхэг", "Shuttle" : "Холхих",
"Witness": "Гэрчлэх","Apprehend" : "Баривчлав","Implicate": "Татан оролцуулах", "Inquiry": "Мөрдөн байцаалт","Bureaucratic" : "Хүнд сурталтай", 
"condemn": "Буруутгах", "Seize": "Барьж авах","Poll":"Санал хураах" ,"Accuse":"Буруутгах", "Offense":"Гэмт хэрэг", 
"Allegedly":"Батласан", "Civil":"Иргэний","Suspect":"Сэжигтэн" ,"Convist":"Шийтгэх", "Verdict":"Шүүхийн шийдвэр", 
"Impair":"Дордуулах", "Erode":"Элэгдэх", "Unmask":"Илчлэх" ,"Abduction":"Хүүхдийн хулгай", "Intentionally":"Зориуд санаатайгаар",
"Coerce":"Албадах" ,"Piracy":"Далайн дээрэмчин", "Detain":"Хорьж саатуулах", "Predicament":"Хүнд нөхцөл байдал", "Deviant":"Гаж",
"Smuggle":" Нууцаар хил давуулах" ,"Distort":"Хэлбэрээ алдах", "Grotesque":"Үзэшгүй муухай", "Modify":"Өөрчлөх", "Villainy":"Муу үйл",
"Addictive":"Донтуулагч" ,"Misconception":"Ташаа ойлголт", "Cartel":"Бүлэг", "Potent":"Хүчирхэг",
"Interdict":"Хориглох" ,"Residual":"Үлдэгдэл", "Juxtapose":"Зэрэгцүүлэх", "Trend":"Чиг хандлага", "Vanity":"Баярхуу зан",
"Inhibit":"Саад хийх" ,"Vulnerable":" Эмзэг", "Charismatic":"Сэтгэл татам", "Medium":"Дундаж", "Hilarious":"Хөгжилтэй",
"Minumum":"Хамгийн бага" ,"Striking":"Гайхалтай", "Cumbersome":"Нүсэр том ", "Connotation":"Давхар утгатай", "Inscription":"Бичээс",
"Decipher":"Тайлж унших" ,"Phonetic":"Авиа зүйн", "Symbolic":"Бэлэг тэмдгийн", "Cast":"Оролцон тоглогч", "Perspective":"Хэтийн төлөв",
"Depict":"Зураглал" ,"Portrayal":"Дүрслэх", "Dimension":"Хэмжигдэхүүн", "Realism":"Бодитой", "Esthetically":"Гоо зүйн",
"Spectrum":"Цар хүрээ" ,"Advent":"Гарч ирэх", "Illiterate":"Бичиг үсэг тайлагдаагүй", "Ambiguous":"Давхар утгатай", "Ingenious":"Ухаантай",
"Berate":"Загнах" ,"Shame":"Ичгүүр", "Despire":"Голох", "Vitriolic":"Хорон", "Adolescent":"Өсвөр нөсны",
"Elite":"Дээдсийн" ,"Distill":"Нэрэх", "Promote":"Дэм өгөх", "Enterprising":"Санаачлагтай",
 "Analyze":"Шинжилгээ" ,"Inference":"Дүгнэлт", "Assail":"Довтлох", "Contrary":"Эсрэг", "Tolerate":"Тэвчих"
}

exports.list_all_words = function(req, res) {
    res.json(data)
};
