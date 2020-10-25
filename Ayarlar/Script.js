/*UFAK CİHAZLAR İÇİN MENU AÇMA BUTONU İŞLEMLERİ>>>>>>>>>>>*/
$(document).ready(function(){
	$("#HeaderMenuAcmaButonuAlani").on("click", function(){
		$("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
	});
});
/*UFAK CİHAZLAR İÇİN MENU AÇMA BUTONU İŞLEMLERİ<<<<<<<<<<<*/



/*SIK SORULAN SORULAR- İÇERİK GÖSTER/GİZLE>>>>>>*/
$.SSSIceriginiGoster	= function(ElemanID){
	var SoruIDsi			= ElemanID;
    var IslenecekAlan		= "#" + SoruIDsi;
	
	$(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideUp();
	$(IslenecekAlan).parent().find(".TamSayfaCerceveAlaniIciSSSSoruIcerigiAlani").slideToggle();
}
/*SIK SORULAN SORULAR- İÇERİK GÖSTER/GİZLE<<<<<<*/


/*ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GÖNDER İŞLEMİ>>>>>>*/
$.AlisverisSepetiFormGonder	= function(){
	$("form").submit();
}
/*ALIŞVERİŞ SEPETİ FATURA VE TESLİMAT ADRESLERİ FORMU GÖNDER İŞLEMİ<<<<<<*/



/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ AÇMA/KAPATMA İŞLEMİ>>>>>>> */
$.AlisverisSepetiOdemeSayfasiIcinKrediKartiSistemiSecildi	=	function(){
	$("#KrediKartiIleOdemeAlani").css("display","block");
	$("#MobilOdemeIleOdemeAlani").css("display","none");
	$("#BankaHavalesiIleOdemeAlani").css("display","none");
}

$.AlisverisSepetiOdemeSayfasiIcinMobilOdemeSistemiSecildi	=	function(){
	$("#KrediKartiIleOdemeAlani").css("display","none");
	$("#MobilOdemeIleOdemeAlani").css("display","block");
	$("#BankaHavalesiIleOdemeAlani").css("display","none");
}

$.AlisverisSepetiOdemeSayfasiIcinBankaHavalesiSistemiSecildi	=	function(){
	$("#KrediKartiIleOdemeAlani").css("display","none");
	$("#MobilOdemeIleOdemeAlani").css("display","none");
	$("#BankaHavalesiIleOdemeAlani").css("display","block");
}
/* ALIŞVERİŞ SEPETİ ÖDEME SİSTEMLERİ AÇMA/KAPATMA İŞLEMİ>>>>>>> */





/* ÜRÜN DETAY SAYFASI RESİM DEĞİŞTİRME İŞLEMİ >>>>>>>>>>>>>>>>>>*/
$.UrunDetaySayfasiIcinResimDegistir	=	function(ResimDegeri){
	var DegisecekResimDosyasiYolu	=	"Resimler/UrunResimleri/Dunya-Klasikleri/";
	var ResimOlustur				=	DegisecekResimDosyasiYolu + ResimDegeri;
	$("#BuyukResim").attr("src", ResimOlustur);
	}
/* ÜRÜN DETAY SAYFASI RESİM DEĞİŞTİRME İŞLEMİ <<<<<<<<<<<<<<<<<*/




/*SLAYT ALANI>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
$(function(){
	var SlaytElementi 							= $(".SlaytAlaniKapsayicisi");
	var SlaytListeOlusturmaElementi	 			= SlaytElementi.find(".SlaytAlaniResimleri");
	var SlaytListesiUzunlugu					= SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
	var SlaytIcınDokumanGenisligi				= SlaytElementi.outerWidth();
	var ToplamGenislik							= SlaytListesiUzunlugu * SlaytIcınDokumanGenisligi;
	var ResimSirasi								= 0;
	var KayacakAlan								= 0;
	
	SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcınDokumanGenisligi).end().width(ToplamGenislik);
	
	$(window).resize(function(){
		SlaytElementi 							= $(".SlaytAlaniKapsayicisi");
		SlaytListeOlusturmaElementi	 			= SlaytElementi.find(".SlaytAlaniResimleri");
		SlaytListesiUzunlugu					= SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
		SlaytIcınDokumanGenisligi				= SlaytElementi.outerWidth();
		ToplamGenislik							= SlaytListesiUzunlugu * SlaytIcınDokumanGenisligi;
		
		SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcınDokumanGenisligi).end().width(ToplamGenislik).css("margin-left","-" + (ResimSirasi * SlaytIcınDokumanGenisligi) + "px");
	});
	
	$.OtomatikDegistir						    = function(){
		if(ResimSirasi < SlaytListesiUzunlugu - 1){
			ResimSirasi++;
			KayacakAlan						     = "-" + (ResimSirasi * SlaytIcınDokumanGenisligi) + "px";
			
		}else{
			ResimSirasi 					     = 0;
			KayacakAlan							 = 0;	
		}
		
	SlaytListeOlusturmaElementi.stop().animate({
		marginLeft:KayacakAlan
	}, 500, function(){
		SlaytElementi 							= $(".SlaytAlaniKapsayicisi");
		SlaytListeOlusturmaElementi	 			= SlaytElementi.find(".SlaytAlaniResimleri");
		SlaytListesiUzunlugu					= SlaytListeOlusturmaElementi.find(".SlaytResmi").length;
		SlaytIcınDokumanGenisligi				= SlaytElementi.outerWidth();
		ToplamGenislik							= SlaytListesiUzunlugu * SlaytIcınDokumanGenisligi;
		
		SlaytListeOlusturmaElementi.find(".SlaytResmi").width(SlaytIcınDokumanGenisligi).end().width(ToplamGenislik).css("margin-left","-" + (ResimSirasi * SlaytIcınDokumanGenisligi) + "px");
		});
	}
	var SlaytOynat	= setInterval("$.OtomatikDegistir()", 2000);
});
/*SLAYT ALANI>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
