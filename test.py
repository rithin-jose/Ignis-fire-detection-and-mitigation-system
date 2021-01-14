from csv import DictWriter 
 
field_names = ['ID','NAME','RANK', 
			'ARTICLE','COUNTRY'] 

dict={'ID':6,'NAME':'William','RANK':5532, 
	'ARTICLE':1,'COUNTRY':'UAE'} 

with open('data.csv', 'a') as f_object: 
	dictwriter_object = DictWriter(f_object, fieldnames=field_names) 
	dictwriter_object.writerow(dict)
	f_object.close()