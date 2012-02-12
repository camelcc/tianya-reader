/* remove the login window. */
var flowWindow = document.getElementById("TB_overlay");
if (flowWindow != null)
{
    flowWindow.parentNode.removeChild(flowWindow);
}
flowWindow = document.getElementById("TB_window");
if (flowWindow != null)
{
	flowWindow.parentNode.removeChild(flowWindow);
}

if ( document.URL.search(/lianzai/i) == -1 )
{
/* Author Reader */
var scriptContent = "                                                       \n\
/* hacked by daemon & divinity (camelcc.com), 2011-12-18 */                 \n\
function authorReader() {                                                   \n\
	/* reader author only. */                                               \n\
	V.lookByAuthor(V.author);                                               \n\
																			\n\
	/* get rid of vip url */                                                \n\
	if (!!V.$('pageDivTop') && !!V.$('pageDivBottom')) {                    \n\
		V.$('pageDivTop').innerHTML = V.pageContentLog;                     \n\
		V.$('pageDivBottom').innerHTML = V.pageContentLog;                  \n\
	} else if (!!V.$('cttPageDiv') && !!V.$('cttPageDiv1')) {               \n\
		V.$('pageForm').action = V.pageContentLog;                          \n\
		V.$('pageForm1').action = V.pageContentLog;                         \n\
	} else {                                                                \n\
		try {                                                               \n\
			V.$('FirstPageForm').action = V.pageContentLog;                 \n\
			V.$('NextPageForm').action = V.pageContentLog;                  \n\
			V.$('PreviousPageForm').action = V.pageContentLog;              \n\
			V.$('LastPageForm').action = V.pageContentLog;                  \n\
		} catch (e) {}                                                      \n\
		try {                                                               \n\
			V.$('form_select').action = V.pageContentLog;                   \n\
			V.$('form_select_ArticleTop').action = V.pageContentLog;        \n\
			V.$('form_select_ResponseTop').action = V.pageContentLog;       \n\
		} catch (e) {}                                                      \n\
	}                                                                       \n\
																			\n\
	/* change the vip function */                                           \n\
	var toolbar = document.getElementsByClassName('main-les')[0];           \n\
	toolbar.innerHTML = toolbar.innerHTML.replace('只看楼主', '查看所有');  \n\
	toolbar.innerHTML = toolbar.innerHTML.replace('authorReader', 'undoAuthorReader');\n\
}                                                                           \n\
																			\n\
function undoAuthorReader() {                                               \n\
	/* undo look author only. */                                            \n\
	V.lookByAuthorBack(V.author);                                           \n\
																			\n\
	/* change the vip function */                                           \n\
	var toolbar = document.getElementsByClassName('main-les')[0];           \n\
	toolbar.innerHTML = toolbar.innerHTML.replace('查看所有', '只看楼主');  \n\
	toolbar.innerHTML = toolbar.innerHTML.replace('undoAuthorReader', 'authorReader');\n\
}                                                                           \n\
";

var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.innerHTML=scriptContent;
document.body.appendChild(newScript);

/* Toolbar initialize */
var authorReaderTool = document.getElementsByClassName("main-les")[0];
authorReaderTool.innerHTML = "<a href='javascript:void(0)' onclick='authorReader();'>只看楼主</a>";
}
