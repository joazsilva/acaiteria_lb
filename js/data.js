// ============================================================
// DADOS DO CARDÁPIO - Edite aqui os produtos e preços
// ============================================================

const WHATSAPP_NUMBER = "5599984158874"; // Número com código do país

const MENU_DATA = {

  "pasteis-tradicionais": [
    { id: "pt1",  name: "Carne",                desc: "Pastel de carne temperada",                         price: 20.00, emoji: "🥟" },
    { id: "pt2",  name: "Carne c/ queijo",       desc: "Carne temperada com queijo derretido",              price: 20.00, emoji: "🥟" },
    { id: "pt3",  name: "Carne c/ catupiry",     desc: "Carne com catupiry cremoso",                        price: 20.00, emoji: "🥟" },
    { id: "pt4",  name: "Carne c/ cheddar",      desc: "Carne com cheddar irresistível",                    price: 20.00, emoji: "🥟" },
    { id: "pt5",  name: "Frango",                desc: "Frango temperado na medida certa",                  price: 20.00, emoji: "🥟" },
    { id: "pt6",  name: "Frango c/ queijo",      desc: "Frango com queijo derretido",                       price: 20.00, emoji: "🥟" },
    { id: "pt7",  name: "Frango c/ catupiry",    desc: "Frango com catupiry cremoso",                       price: 20.00, emoji: "🥟" },
    { id: "pt8",  name: "Frango c/ cheddar",     desc: "Frango com cheddar",                                price: 20.00, emoji: "🥟" },
    { id: "pt9",  name: "Pizza",                 desc: "Presunto, queijo, tomate e orégano",                price: 20.00, emoji: "🍕" },
    { id: "pt10", name: "3 Queijos",             desc: "Mix irresistível de queijos",                       price: 20.00, emoji: "🧀" },
    { id: "pt11", name: "Portuguesa",            desc: "Presunto, queijo, ovo, milho e orégano",            price: 20.00, emoji: "🥟" },
    { id: "pt12", name: "Misto",                 desc: "Presunto e queijo clássico",                        price: 20.00, emoji: "🥟" },
    { id: "pt13", name: "Calabresa c/ queijo",   desc: "Calabresa com queijo derretido",                    price: 20.00, emoji: "🌶️" },
    { id: "pt14", name: "Calabresa c/ catupiry", desc: "Calabresa com catupiry",                            price: 20.00, emoji: "🌶️" },
    { id: "pt15", name: "Calabresa c/ cheddar",  desc: "Calabresa com cheddar",                             price: 20.00, emoji: "🌶️" },
    { id: "pt16", name: "Calabresa acebolada",   desc: "Calabresa com cebola caramelizada",                 price: 20.00, emoji: "🌶️" },
    { id: "pt17", name: "Moda",                  desc: "Presunto, calabresa, queijo, milho, catupiry e orégano", price: 20.00, emoji: "👑" },
  ],

  "pasteis-especiais": [
    { id: "pe1", name: "Queijo",            desc: "Queijo abundante e derretido",                              price: 25.00, emoji: "🧀" },
    { id: "pe2", name: "Carne mista",       desc: "Milho, cebola, queijo e catupiry",                          price: 25.00, emoji: "🥟" },
    { id: "pe3", name: "Frango misto",      desc: "Milho, cebola, queijo, catupiry e orégano",                 price: 25.00, emoji: "🥟" },
    { id: "pe4", name: "Carne de sol c/ queijo",   desc: "Carne de sol com queijo especial",                  price: 25.00, emoji: "⭐" },
    { id: "pe5", name: "Carne de sol c/ catupiry", desc: "Carne de sol com catupiry",                         price: 25.00, emoji: "⭐" },
    { id: "pe6", name: "Carne de sol c/ cheddar",  desc: "Carne de sol com cheddar",                          price: 25.00, emoji: "⭐" },
    { id: "pe7", name: "Carne de sol c/ queijo e banana", desc: "Combinação única de carne de sol e banana",  price: 25.00, emoji: "⭐" },
    { id: "pe8", name: "Pastel MV",         desc: "Frango, carne, queijo, catupiry e orégano",                 price: 25.00, emoji: "🔥" },
  ],

  "pasteis-duplos": [
    { id: "pd1", name: "Especial LB",           desc: "Frango, carne, queijo, presunto, ovo e catupiry",      price: 35.00, emoji: "👑" },
    { id: "pd2", name: "Especial Frango c/ catupiry", desc: "Frango especial com catupiry",                   price: 35.00, emoji: "🥟" },
    { id: "pd3", name: "Especial Moda",         desc: "Presunto, calabresa, queijo, milho, catupiry e orégano", price: 35.00, emoji: "🔥" },
    { id: "pd4", name: "Especial Carne mista",  desc: "Milho, cebola, queijo e catupiry",                     price: 35.00, emoji: "🥩" },
    { id: "pd5", name: "Especial Frango misto", desc: "Milho, cebola, queijo e catupiry",                     price: 35.00, emoji: "🍗" },
  ],

  "acai-potes": [
    { id: "ap1", name: "Pote 180ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 7.00,  emoji: "🫙" },
    { id: "ap2", name: "Pote 200ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 9.00,  emoji: "🫙" },
    { id: "ap3", name: "Pote 240ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 11.00, emoji: "🫙" },
    { id: "ap4", name: "Pote 300ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 15.00, emoji: "🫙" },
    { id: "ap5", name: "Pote 360ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 17.00, emoji: "🫙" },
    { id: "ap6", name: "Pote 480ml",  desc: "Açaí cremoso • 3 complementos + 1 cobertura grátis", price: 19.00, emoji: "🫙" },
  ],

  "acai-tigelas": [
    { id: "at1", name: "Tigela 230ml", desc: "Açaí na tigela • 3 complementos + 1 cobertura grátis", price: 10.00, emoji: "🥣" },
    { id: "at2", name: "Tigela 330ml", desc: "Açaí na tigela • 3 complementos + 1 cobertura grátis", price: 16.00, emoji: "🥣" },
    { id: "at3", name: "Tigela 420ml", desc: "Açaí na tigela • 3 complementos + 1 cobertura grátis", price: 18.00, emoji: "🥣" },
    { id: "at4", name: "Tigela 500ml", desc: "Açaí na tigela • 3 complementos + 1 cobertura grátis", price: 21.00, emoji: "🥣" },
  ],

  "lanches": [
    { id: "la1", name: "Batata Frita Média",        desc: "Batata crocante e sequinha",                         price: 15.00, emoji: "🍟" },
    { id: "la2", name: "Batata Frita Grande",        desc: "Batata crocante porção grande",                      price: 18.00, emoji: "🍟" },
    { id: "la3", name: "Crepe no Palito",            desc: "Presunto e queijo ou Salsicha e queijo",             price: 7.00,  emoji: "🫓" },
    { id: "la4", name: "Mini Salgados 12 Und",       desc: "Bolinha de queijo, carne ou coxinha de frango",      price: 12.00, emoji: "🍢" },
    { id: "la5", name: "Mini Salgados 15 Und",       desc: "Bolinha de queijo, carne ou coxinha de frango",      price: 15.00, emoji: "🍢" },
    { id: "la6", name: "Mini Salgados 20 Und",       desc: "Bolinha de queijo, carne ou coxinha de frango",      price: 20.00, emoji: "🍢" },
    { id: "la7", name: "Mini Salgados 25 Und",       desc: "Bolinha de queijo, carne ou coxinha de frango",      price: 25.00, emoji: "🍢" },
    { id: "la8", name: "Caldo 350ml",                desc: "Queijo, ovos, cheiro verde e torrada",               price: 12.00, emoji: "🍲" },
    { id: "la9", name: "Caldo 500ml",                desc: "Queijo, ovos, cheiro verde e torrada",               price: 17.00, emoji: "🍲" },
  ],

  "doces": [
    { id: "do1", name: "Rabanada",    desc: "Rabanada quentinha e deliciosa",  price: 22.00, emoji: "🍞" },
    { id: "do2", name: "Choconana",   desc: "Chocolate com banana especial",   price: 22.00, emoji: "🍫" },
    { id: "do3", name: "Chocolate",   desc: "Pastel recheado de chocolate",    price: 22.00, emoji: "🍫" },
  ],

  "vitaminas": [
    { id: "vi1", name: "Vitamina de Maracujá",  desc: "Vitamina cremosa de maracujá",   price: 12.00, emoji: "🥤" },
    { id: "vi2", name: "Vitamina de Goiaba",    desc: "Vitamina cremosa de goiaba",     price: 12.00, emoji: "🥤" },
    { id: "vi3", name: "Vitamina de Acerola",   desc: "Vitamina cremosa de acerola",    price: 12.00, emoji: "🥤" },
    { id: "vi4", name: "Vitamina de Manga",     desc: "Vitamina cremosa de manga",      price: 12.00, emoji: "🥤" },
    { id: "vi5", name: "Vitamina de Cajá",      desc: "Vitamina cremosa de cajá",       price: 12.00, emoji: "🥤" },
    { id: "vi6", name: "Vitamina de Cupuaçu",   desc: "Vitamina cremosa de cupuaçu",    price: 12.00, emoji: "🥤" },
  ],

  "sucos": [
    { id: "su1",  name: "Suco de Maracujá",   desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su2",  name: "Suco de Goiaba",     desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su3",  name: "Suco de Acerola",    desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su4",  name: "Suco de Manga",      desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su5",  name: "Suco de Cajá",       desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su6",  name: "Suco de Cupuaçu",    desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su7",  name: "Suco de Tamarindo",  desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su8",  name: "Suco de Abacaxi",    desc: "Suco natural • Copo R$10 / Jarra 1L R$20",   price: 10.00, emoji: "🍹" },
    { id: "su9",  name: "Caldo de Cana",      desc: "Refrescante caldo de cana natural",           price: 10.00, emoji: "🌾" },
  ],

  "refrigerantes": [
    { id: "re1", name: "Coca-Cola 350ml",   desc: "Refrigerante gelado",   price: 6.00,  emoji: "🥤" },
    { id: "re2", name: "Guaraná 350ml",     desc: "Refrigerante gelado",   price: 6.00,  emoji: "🥤" },
    { id: "re3", name: "Fanta 350ml",       desc: "Refrigerante gelado",   price: 6.00,  emoji: "🥤" },
    { id: "re4", name: "Coca-Cola 1L",      desc: "Refrigerante gelado",   price: 12.00, emoji: "🍶" },
    { id: "re5", name: "Guaraná 1L",        desc: "Refrigerante gelado",   price: 10.00, emoji: "🍶" },
    { id: "re6", name: "Fanta 1L",          desc: "Refrigerante gelado",   price: 12.00, emoji: "🍶" },
  ],
};