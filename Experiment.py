Pokedex_ID, BST, HP, Attack, Defence, Sp_Attack, Sp_Defence, Speed = [], [], [], [], [], [], [], []
cells = soup.find_all('td', class_='cell-num')
for idx, cell in enumerate(cells):
    value = cell.text.strip()
    if idx % 8 == 0:
        Pokedex_ID.append(value)
    elif idx % 8 == 1:
        BST.append(value)
    elif idx % 8 == 2:
        HP.append(value)
    elif idx % 8 == 3:
        Attack.append(value)
    elif idx % 8 == 4:
        Defence.append(value)
    elif idx % 8 == 5:
        Sp_Attack.append(value)
    elif idx % 8 == 6:
        Sp_Defence.append(value)
    elif idx % 8 == 7:
        Speed.append(value)