import fitz
import os

pdf_path = os.path.join(r'c:\Users\ADMIN\Jacob\CV\Jacobyang0818.github.io\CV', "Jacob's_CV_DS_LLMapplication_0922.pdf")

try:
    doc = fitz.open(pdf_path)
    text = '\n---\n'.join([p.get_text() for p in doc])
    print(text)
except Exception as e:
    print("Error:", e)
